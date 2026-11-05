import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

await mkdir('artifacts', { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined })
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' })
  await page.goto(`${process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:41873'}/#about`)
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1100 })
    const layout = await page.locator('#about').evaluate(section => {
      const columns = section.querySelector('.about-grid').children
      const left = columns[0].getBoundingClientRect(), right = columns[1].getBoundingClientRect()
      const heading = section.querySelector('.about-left-title')
      return {
        overflow: document.documentElement.scrollWidth > innerWidth,
        headingFits: [...heading.children].every(line => line.scrollWidth <= line.clientWidth),
        stacked: right.top > left.bottom - 1,
        sideBySide: right.left > left.right - 1,
      }
    })
    if (layout.overflow || !layout.headingFits || (width < 768 ? !layout.stacked : !layout.sideBySide)) throw new Error(`Layout check failed at ${width}px: ${JSON.stringify(layout)}`)
    await page.locator('#about').screenshot({ path: `artifacts/about-${width}.png` })
    console.log(`${width}px: heading fits, no horizontal overflow, ${layout.stacked ? 'stacked' : 'two columns'}`)
  }
} finally { await browser.close() }
