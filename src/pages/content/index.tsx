import { startChatWidthAdjuster } from './chatWidth/index';
import { startEditInputWidthAdjuster } from './editInputWidth/index';
import { startExportButton } from './export/index';
import { startFolderManager } from './folder/index';
import { startPromptManager } from './prompt/index';
import { startTimeline } from './timeline/index';

import { startFormulaCopy } from '@/features/formulaCopy';

try {
  const host = location.hostname;
  const isGemini = host === 'gemini.google.com' || host === 'aistudio.google.com';
  const isChatGPT = host === 'chatgpt.com' || host === 'chat.openai.com';
  const isDeepseek = host === 'chat.deepseek.com';
  const isDoubao = host === 'www.doubao.com';
  const isKimi = host === 'www.kimi.com' || host === 'kimi.moonshot.cn';
  const isAltChat = isChatGPT || isDeepseek || isDoubao || isKimi;

  if (isGemini) {
    startTimeline();
    startFolderManager();
    startChatWidthAdjuster();
    startEditInputWidthAdjuster();
    startFormulaCopy();
  }

  if (isAltChat) {
    // Enable key features on other AI chat surfaces
    startTimeline();
    startChatWidthAdjuster();
    startEditInputWidthAdjuster();
    startFormulaCopy();
  }

  if (isGemini || isAltChat) {
    startPromptManager();
  }

  // Export button supports all configured hosts (checks inside)
  startExportButton();
} catch (e) {
  console.error(e);
}
