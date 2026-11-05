import { test, expect } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'

test('final PDF is served intact and both CV buttons download on desktop and mobile', async ({ page, request }) => {
  test.setTimeout(90000)
  const source = await readFile('public/Madi_Ceesay_CV.pdf')
  const hash = bytes => createHash('sha256').update(bytes).digest('hex')
  expect(source.subarray(0, 5).toString()).toBe('%PDF-')
  const response = await request.get('/Madi_Ceesay_CV.pdf')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('application/pdf')
  expect(hash(await response.body())).toBe(hash(source))
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 })
    const buttons = page.getByRole('link', { name: 'Download CV' })
    await expect(buttons).toHaveCount(2)
    for (const button of await buttons.all()) {
      await expect(button).toHaveAttribute('href', '/Madi_Ceesay_CV.pdf')
      expect(await button.getAttribute('download')).not.toBeNull()
      const pending = page.waitForEvent('download')
      await button.click()
      const download = await pending
      expect(download.suggestedFilename()).toBe('Madi_Ceesay_CV.pdf')
      expect(hash(await readFile(await download.path()))).toBe(hash(source))
    }
  }
})
