import { test, expect } from '@playwright/test';

const SCREENS = [
  { name: 'client-home', path: '/home' },
  { name: 'marketplace', path: '/vendors' },
  { name: 'vendor-profile', path: '/vendors/catering/1' },
  { name: 'budget-tracker', path: '/planner/budget' },
  { name: 'order-list', path: '/orders' },
  { name: 'vendor-dashboard', path: '/vendor/financial' },
  { name: 'admin-dashboard', path: '/admin' },
  { name: 'chat', path: '/chat/1' },
  { name: 'help-escrow', path: '/help/escrow' }
];

test('capture screenshots', async ({ page }) => {
  for (const screen of SCREENS) {
    await page.goto(screen.path);
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: `screenshots/${screen.name}.png`, fullPage: true });
  }
});
