import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    // Browser options
    // slowMo: 500, // Add this to make e2e test run slower to inspect
    // headless: false,

    // Context options
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },
  testDir: './e2e',
};
export default config;
