import { test, expect } from '@playwright/test'
import { projects } from '../src/data/projects.js'

test('live project pages show real screenshots, live and code links', async ({ page }) => {
  test.setTimeout(90000)
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const slug of ['lifelink', 'skilllink']) {
    const project = projects.find(item => item.slug === slug)
    await page.goto(`/projects/${slug}`)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name)
    await expect(page.locator('.live-badge')).toHaveText('Live')
    await expect(page.getByText(/in development|not publicly deployed|documentation in progress/i)).toHaveCount(0)
    await expect(page.getByRole('link', { name: /Open the App|Visit Live Website/ })).toHaveAttribute('href', project.live)
    await expect(page.getByRole('link', { name: 'View Code' })).toHaveAttribute('href', project.code)
    await expect(page.getByRole('heading', { name: 'Key features' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Key technical challenges' })).toBeVisible()
    await expect(page.locator('.challenge')).toHaveCount(project.challenges.length)
    await expect(page.locator('.metric-strip > div')).toHaveCount(project.metrics.length)
    const diagram = page.locator('.architecture img')
    await expect(diagram).toHaveAttribute('src', project.architecture.image)
    await diagram.scrollIntoViewIfNeeded()
    await expect.poll(() => diagram.evaluate(image => image.naturalWidth)).toBeGreaterThan(0)
    if (project.video) {
      const video = page.locator('#demo video')
      await expect(video).toHaveAttribute('src', project.video.src)
      expect((await page.request.get(project.video.src)).status()).toBe(200)
    }
    await expect(page.locator('.planned-features li')).toHaveCount(project.features.length)
    const screenshot = page.locator('.case-study > .project-image img')
    await expect(screenshot).toHaveAttribute('src', project.image)
    await expect.poll(() => screenshot.evaluate(image => image.naturalWidth)).toBeGreaterThan(0)
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 })
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      await page.screenshot({ path: `artifacts/${slug}-${width}.png`, fullPage: true })
    }
    await page.getByRole('link', { name: 'Back to selected work' }).click()
    await expect(page).toHaveURL(/#work$/)
  }
  // Featured projects come first, in order, and every project page is reachable from the home page.
  await page.goto('/')
  const featured = projects.filter(p => p.featured).map(p => p.name)
  await expect(page.locator('.project-card h3')).toHaveText(featured)
  for (const project of projects) {
    await page.goto('/')
    await page.locator(`a[href="/projects/${project.slug}"]`).first().click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name)
  }
  expect(errors).toEqual([])
})
