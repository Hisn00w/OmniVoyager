import { TimelineManager } from './manager';

function isConversationRoute(pathname = location.pathname): boolean {
  const host = location.hostname;
  // Gemini routes: /app, /gem, /u/<num>/app, /u/<num>/gem
  if (host === 'gemini.google.com' || host === 'aistudio.google.com') {
    return /^\/(?:u\/\d+\/)?(app|gem)(\/|$)/.test(pathname);
  }
  // ChatGPT routes: '/', '/c/<id>', '/share/...'; fallback by detecting messages in DOM
  if (host === 'chatgpt.com' || host === 'chat.openai.com') {
    if (/^\/$/.test(pathname) || /^\/c\//.test(pathname) || /^\/share\//.test(pathname)) return true;
    try { return !!document.querySelector('[data-message-author-role]'); } catch { return false; }
  }
  // Other chat hosts (Deepseek, Doubao, Kimi) currently use a single-page layout – treat as conversation pages
  if (host === 'chat.deepseek.com' || host === 'www.doubao.com' || host === 'www.kimi.com' || host === 'kimi.moonshot.cn') {
    return true;
  }
  return false;
}

let timelineManagerInstance: TimelineManager | null = null;
let currentUrl = location.href;
let routeCheckIntervalId: number | null = null;
let routeListenersAttached = false;

function initializeTimeline(): void {
  if (timelineManagerInstance) {
    try {
      timelineManagerInstance.destroy();
    } catch {}
    timelineManagerInstance = null;
  }
  try {
    document.querySelector('.gemini-timeline-bar')?.remove();
  } catch {}
  try {
    document.querySelector('.timeline-left-slider')?.remove();
  } catch {}
  try {
    document.getElementById('gemini-timeline-tooltip')?.remove();
  } catch {}
  timelineManagerInstance = new TimelineManager();
  timelineManagerInstance
    .init()
    .catch((err) => console.error('Timeline initialization failed:', err));
}

function handleUrlChange(): void {
  if (location.href === currentUrl) return;
  currentUrl = location.href;
  if (isConversationRoute()) initializeTimeline();
  else {
    if (timelineManagerInstance) {
      try {
        timelineManagerInstance.destroy();
      } catch {}
      timelineManagerInstance = null;
    }
    try {
      document.querySelector('.gemini-timeline-bar')?.remove();
    } catch {}
    try {
      document.querySelector('.timeline-left-slider')?.remove();
    } catch {}
    try {
      document.getElementById('gemini-timeline-tooltip')?.remove();
    } catch {}
  }
}

function attachRouteListenersOnce(): void {
  if (routeListenersAttached) return;
  routeListenersAttached = true;
  window.addEventListener('popstate', handleUrlChange);
  window.addEventListener('hashchange', handleUrlChange);
  routeCheckIntervalId = window.setInterval(() => {
    if (location.href !== currentUrl) handleUrlChange();
  }, 800);
}

export function startTimeline(): void {
  // Immediately initialize if we're already on a conversation page
  if (document.body && isConversationRoute()) {
    initializeTimeline();
  }
  
  const initialObserver = new MutationObserver(() => {
    if (document.body) {
      if (isConversationRoute()) initializeTimeline();
      initialObserver.disconnect();
      const pageObserver = new MutationObserver(handleUrlChange);
      pageObserver.observe(document.body, { childList: true, subtree: true });
      attachRouteListenersOnce();
    }
  });
  initialObserver.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
  });
}
