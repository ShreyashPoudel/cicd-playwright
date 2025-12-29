import { test, expect } from '@playwright/test';

test.describe('Basic Website Tests', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should display heading text', async ({ page }) => {
    await page.goto('https://example.com');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Eshreyahs pouadkjnsakjc');
  });

  test('should have a clickable link', async ({ page }) => {
    await page.goto('https://example.com');
    const link = page.locator('a');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
  });
});