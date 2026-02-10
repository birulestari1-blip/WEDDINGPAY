const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 }); // iPhone 12 Pro

  const routes = [
    { name: 'compare', path: '/vendors/compare' },
    { name: 'guests', path: '/planner/guests' },
    { name: 'checklist', path: '/planner/checklist' },
    { name: 'contract', path: '/orders/1/contract' },
    { name: 'revision', path: '/orders/1/revision' },
    { name: 'financial', path: '/vendor/financial' },
    { name: 'admin_dispute', path: '/admin/dispute/1' }
  ];

  for (const route of routes) {
    try {
      await page.goto(`http://localhost:3000${route.path}`, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `screenshot_${route.name}.png` });
      console.log(`Captured ${route.name}`);
    } catch (e) {
      console.error(`Failed ${route.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
