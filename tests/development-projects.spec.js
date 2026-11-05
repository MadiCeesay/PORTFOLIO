import { test, expect } from '@playwright/test'
import { projects } from '../src/data/projects.js'

test('development project overviews and existing project links', async ({ page }) => {
  test.setTimeout(90000)
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const slug of ['skilllink', 'lifelink']) {
    const project = projects.find(item => item.slug === slug)
    await page.goto(`/projects/${slug}`)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name)
    await expect(page.getByText('Documentation in progress')).toHaveCount(0)
    await expect(page.getByRole('link', { name: 'Visit Live Website' })).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Planned key features' })).toBeVisible()
    await expect(page.locator('.planned-features li')).toHaveCount(10)
    await expect(page.locator('.overview-visual')).toHaveClass(new RegExp(`overview-visual-${project.presentation}`))
    const screenshot = page.locator('.overview-image-frame img')
    await expect(screenshot).toHaveAttribute('src', project.image)
    await expect.poll(() => screenshot.evaluate(image => image.naturalWidth)).toBeGreaterThan(0)
    await expect(page.locator('.overview-image-pending')).toHaveCount(0)
    await expect(page.locator('.project-status')).toContainText('not publicly deployed')
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 })
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      await page.screenshot({ path: `artifacts/${slug}-${width}.png`, fullPage: true })
    }
    await page.getByRole('link', { name: 'Back to selected work' }).click()
    await expect(page).toHaveURL(/#work$/)
  }
  for (const project of projects) {
    const card = page.locator(`a[href="/projects/${project.slug}"]`).first()
    await card.click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name)
    if (project.live) await expect(page.getByRole('link', { name: 'Visit Live Website' })).toHaveAttribute('href', project.live)
    await page.getByRole('link', { name: 'Back to selected work' }).click()
  }
  expect(errors).toEqual([])
})
