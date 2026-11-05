import { test, expect } from '@playwright/test'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'

test('engineering positioning, navigation and contact assets', async ({ page, request }) => {
  test.setTimeout(90000)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Full-StackSoftware Engineer')
  await expect(page.locator('#approach h2')).toHaveText('How I Build Software')
  await expect(page.locator('.approach-card')).toHaveCount(4)
  await expect(page.locator('#experience')).toHaveCount(0)
  await expect(page.locator('#about')).toContainText('University of The Gambia')
  await expect(page.locator('#about h2')).toHaveText('Real problems.Thoughtful solutions.')
  await expect(page.locator('#about')).not.toContainText('3.69')
  await expect(page.locator('.skill h3')).toHaveText(['Backend Development', 'Frontend Development', 'Databases', 'Programming Languages', 'Testing', 'Tools and Deployment'])
  for (const nav of ['#main-navigation', 'footer nav']) {
    const links = page.locator(`${nav} a`)
    for (let i = 0; i < await links.count(); i++) {
      const link = links.nth(i), href = await link.getAttribute('href')
      await link.click()
      await expect(page).toHaveURL(new RegExp(`${href.slice(1)}$`))
      await expect(page.locator(href.slice(1))).toBeAttached()
    }
  }
  await expect(page.locator('.contact-links a[href="mailto:cmadi3762@gmail.com"]')).toBeVisible()
  await expect(page.locator('.contact-links a[href="https://github.com/MadiCeesay"]')).toBeVisible()
  await expect(page.locator('a[href="https://www.linkedin.com/in/madi-ceesay-857351372"]')).toHaveCount(3)
  for (const link of await page.locator('a[download]').all()) expect(await link.getAttribute('href')).toBe('/Madi_Ceesay_CV.pdf')
  const response = await request.get('/Madi_Ceesay_CV.pdf')
  expect(response.ok()).toBe(true)
  const hash = bytes => createHash('sha256').update(bytes).digest('hex')
  expect(hash(await response.body())).toBe(hash(await readFile('public/Madi_Ceesay_CV.pdf')))
  for (const name of ['portrait.jpg', 'amc-gambia.png', 'car-rental-system.png', 'floodwatch-gambia.png']) expect((await request.get(`/images/${name}`)).ok()).toBe(true)
  await page.setViewportSize({ width: 390, height: 844 })
  for (const label of ['Home', 'About', 'Skills', 'Work', 'Approach', 'Contact']) {
    await page.locator('.menu-toggle').click()
    await page.locator('#main-navigation').getByRole('link', { name: label, exact: true }).click()
    await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'false')
  }
})
