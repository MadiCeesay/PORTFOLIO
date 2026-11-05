import { test, expect } from '@playwright/test'

const url = 'https://www.linkedin.com/in/madi-ceesay-857351372'

test('official LinkedIn links render on desktop and mobile and open safely', async ({ page, context }) => {
  test.setTimeout(90000)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const links = page.locator(`a[href="${url}"]`)
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect(links).toHaveCount(3)
    for (const link of await links.all()) {
      await link.scrollIntoViewIfNeeded()
      await expect(link).toBeVisible()
      await expect(link).toHaveAccessibleName(/LinkedIn/i)
      await expect(link.locator('svg.lucide-linkedin')).toBeVisible()
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
  // Verify popup behavior without depending on LinkedIn's authentication or bot controls.
  await context.route('https://www.linkedin.com/**', route => route.fulfill({ contentType: 'text/html', body: '<title>LinkedIn destination test</title>' }))
  for (const link of await links.all()) {
    const opened = page.waitForEvent('popup')
    await link.click()
    const popup = await opened
    await expect(popup).toHaveURL(url)
    expect(await popup.evaluate(() => window.opener === null)).toBe(true)
    await popup.close()
  }
})
