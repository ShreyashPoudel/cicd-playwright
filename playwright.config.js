
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 1 : undefined,
 
  reporter: [['html'], ['github']],

  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: 'on-first-retry',
  },
  testMatch:["**.test.js"],
  retries: 0,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});

