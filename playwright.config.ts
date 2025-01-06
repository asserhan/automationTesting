import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    video: {
      mode: 'on',
      size: { width: 1280, height: 720 }
    },
    trace: 'on-first-retry',
  },
  reporter: [['html'], ['list']],
};

export default config;