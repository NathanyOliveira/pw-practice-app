import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/')
})

test.describe('Forms section', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click()
  })

  test('go to Form Layouts', async ({ page }) => {
    await page.getByText('Form Layouts').click()
  })

  test('go to Datepicker', async ({ page }) => {
    await page.getByText('Datepicker').click()
  })
})

test.describe('Charts section', () => {
  test.beforeEach(async ({ page }) => {
await page.getByText('Charts').first().click()  })

  test('open charts page', async ({ page }) => {
    await page.getByText('Echarts').click()
  })
})

