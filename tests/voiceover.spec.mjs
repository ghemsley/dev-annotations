import { test, expect } from '@playwright/test'
import {
  activate,
  startInteracting,
  VoiceOver,
  moveRight
} from '@accesslint/voiceover'
import * as path from 'path'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

test.describe('Playwright VoiceOver', () => {
  const vo = new VoiceOver()

  async function findText({ page, text, role = null, timeout = null }) {
    const finder = async () => {
      let spokenText = [await vo.lastPhrase()]
      let prevSpokenText = []
      await page.locator('body').focus()
      while (
        (() => {
          // If we hit the end of the page and keep finding the same element, break
          if (prevSpokenText.length === 0) return true
          for (let i = 0; i < prevSpokenText.length; i++) {
            if (prevSpokenText[i] !== spokenText[i]) return true
          }
          return false
        })()
      ) {
        console.log('looking for:', text)
        console.log('found:', spokenText)
        prevSpokenText = spokenText
        for (const phrase of spokenText) {
          if (phrase.toLowerCase().includes(text.toLowerCase())) return phrase
        }
        spokenText = await vo.seek({ text, ...(role && { role }), tries: 1 })
      }
      return null
    }
    return await (typeof timeout === 'number'
      ? Promise.race([
          finder(),
          (async () => {
            await delay(timeout)
            return null
          })()
        ])
      : finder())
  }

  test.beforeAll(async () => {
    const timestamp = new Date().toISOString()
    const recordingPath = path.resolve(
      `./tests/recordings/voiceover-${timestamp}.mov`
    )
    vo.record({ file: recordingPath })
  })

  test.beforeEach(async ({ page }) => {
    await vo.launch()
    await delay(3000)
    await page.goto('/', {
      waitUntil: 'load'
    })
    expect(page.url()).toBe('http://localhost:3000/')
    await page.waitForSelector('#main')
    await expect(page.locator('#main')).toBeVisible()
    if (!(await vo.lastPhrase())?.includes('web content')) {
      await vo.rotor({ menu: 'Window Spots', find: 'content' })
    }
    await vo.execute(startInteracting)
  })

  test.afterEach(async () => {
    await vo.quit()
    await delay(3000)
  })

  test.afterAll(async () => {})

  test('Skip link reads correctly', async ({ page }) => {
    const text = 'Skip to main content'
    const role = 'link'
    const expected = `${role} ${text}`
    const result = await findText({
      page,
      text,
      role,
      timeout: 30000
    })
    expect(result).toMatch(new RegExp(expected))
  })

  test('Skip link focuses the correct element', async ({ page }) => {
    const linkText = 'Skip to main content'
    const linkRole = 'link'
    const linkExpected = `${linkRole} ${linkText}`
    const headingText = `It's time to check in`
    const headingExpected = `heading level 1 ${headingText}`
    const linkResult = await findText({
      page,
      text: linkText,
      role: linkRole,
      timeout: 30000
    })
    expect(linkResult).toMatch(new RegExp(linkExpected))
    expect(
      await page.evaluate(
        async (string) => document.activeElement?.textContent?.includes(string),
        linkText
      )
    ).toBe(true)
    await vo.execute(activate)
    const headingSpoken = await vo.lastPhrase()
    expect(headingSpoken).toMatch(new RegExp(headingExpected))
  })

  test('Visit start can be navigated to using Voiceover', async ({ page }) => {
    const text = 'Visit start'
    const result = await findText({
      page,
      text,
      timeout: 30000
    })
    expect(result).toMatch(new RegExp(text))
  })
})
