import { voTest as test } from '@guidepup/playwright'
import { expect } from '@playwright/test'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForWebContentAnnouncement(page, voiceOver) {
  for (let i = 0; i < 30; i++) {
    const itemText = await voiceOver.itemText()
    if (itemText.toLowerCase()?.includes('content')) {
      return
    }
    await delay(1000)
  }
  throw new Error('web content could not be found')
}

async function findText(text, voiceOver) {
  const spokenText = await voiceOver.itemText()
  while (!spokenText.toLowerCase()?.includes(text.toLowerCase())) {
    console.log(spokenText)
    await voiceOver.press('Control+Option+ArrowRight')
  }
}

test.describe('Playwright VoiceOver', () => {
  test.beforeEach(async ({ page, voiceOver }) => {
    await delay(3000)
    await page.goto('/', {
      waitUntil: 'domcontentloaded'
    })
    expect(page.url()).toBe('http://localhost:3000/')
    await page.waitForSelector('#main')
    await expect(page.locator('#main')).toBeVisible()
    await page.focus('body')
    await voiceOver.interact()
    await waitForWebContentAnnouncement(page, voiceOver)
  })

  test.afterEach(async () => {
    await delay(3 * 1000)
  })

  test('Skip link reads correctly', async ({ page, voiceOver }) => {
    const text = 'skip to main content'
    const expected = `${text} link`
    await findText(text, voiceOver)
    const spoken = (await voiceOver.itemText()).toLowerCase()
    console.log(spoken)
    expect(spoken.toLowerCase()).toBe(expected)
  })

  test('Skip link focuses the correct element', async ({ page, voiceOver }) => {
    const text = 'skip to main content'
    const expected = `it's time to check in heading level 1`
    await findText(text, voiceOver)
    await voiceOver.press('Control+Option+Space')
    const spoken = (await voiceOver.itemText()).toLowerCase()
    expect(spoken).toBe(expected)
  })
})
