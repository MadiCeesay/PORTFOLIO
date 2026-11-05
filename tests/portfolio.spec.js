import { test, expect } from '@playwright/test'
test('home, assets, navigation and project routes',async({page,request})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await expect.poll(()=>page.locator('.portrait-frame img').evaluate(img=>img.naturalWidth)).toBeGreaterThan(0);
 expect((await request.get('/Madi_Ceesay_CV.pdf')).status()).toBe(200);
 await page.getByRole('link',{name:'View Case Study'}).first().click();await expect(page).toHaveURL(/projects\/amc-gambia/);await expect(page.getByRole('heading',{level:1})).toHaveText('AMC Gambia');
 await page.reload();await expect(page.getByRole('heading',{level:1})).toHaveText('AMC Gambia');
 for(const slug of ['car-rental-system','floodwatch-gambia','lifelink','fincore','skilllink']){await page.goto(`/projects/${slug}`);await expect(page.getByRole('heading',{level:1})).toBeVisible()}
 await page.goto('/missing');await expect(page.getByText('A little off the path.')).toBeVisible();expect(errors).toEqual([])
})
test('responsive layouts and mobile keyboard navigation',async({page})=>{
 await page.goto('/');await page.emulateMedia({reducedMotion:'reduce'});for(const img of await page.locator('.project-image img').all()){await img.scrollIntoViewIfNeeded();await expect.poll(()=>img.evaluate(element=>element.naturalWidth)).toBeGreaterThan(0)}await page.locator('#home').scrollIntoViewIfNeeded();for(const width of [320,375,390,768,1024,1440]){await page.setViewportSize({width,height:900});await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.screenshot({path:`test-results/home-${width}.png`,fullPage:true})}
 await page.setViewportSize({width:390,height:844});const menu=page.locator('.menu-toggle');await menu.click();await expect(menu).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(menu).toHaveAttribute('aria-expanded','false');await expect(menu).toBeFocused();await menu.click();await page.locator('#main-navigation').getByRole('link',{name:'Work',exact:true}).click();await expect(menu).toHaveAttribute('aria-expanded','false');await expect(page).toHaveURL(/#work/)
})

