import { test, expect } from '@playwright/test';

test('Apple homepage loads and shows Mac link', async ({ page }) => {
    await test.step('Navigate to Apple homepage', async () => {
        await page.goto('/');
    });

    await test.step('Check that main navigation is visible', async () => {
        const nav = page.locator('[id="globalnav"]');
        await expect(nav).toBeVisible();
    });

    await test.step('Verify that "Mac" link is visible in the nav', async () => {
        const macLink = page.locator('[aria-label="Mac"]');
        await expect(macLink).toBeVisible();
    });
});