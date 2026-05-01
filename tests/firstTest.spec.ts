import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

// test.describe('Forms section', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.getByText('Forms').click()
//   })

//   test('go to Form Layouts', async ({ page }) => {
//     await page.getByText('Form Layouts').click()
//   })

//   test('go to Datepicker', async ({ page }) => {
//     await page.getByText('Datepicker').click()
//   })
// })

// test.describe('Charts section', () => {
//   test.beforeEach(async ({ page }) => {
// await page.getByText('Charts').first().click()  })

//   test('open charts page', async ({ page }) => {
//     await page.getByText('Echarts').click()
//   })
// })

test('Locator sintax rules', async({page}) =>{
  //by Tag name
  //await page.locator('input').first().click()

  //by ID
 await page.locator('#inputEmail1').click()

  //by Class value
  page.locator('.shape-rectangle')

  //by Attribute 
  page.locator('[placeholder="Email"]')

  //by Class value (full)
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

  //Combine different selectors
  page.locator('input[placeholder="Email"]')

  //by XPath(NOT RECOMMENDED)
  page.locator('//*[@id=inputEmail1]')

  //by Partial text match 
  page.locator(':text("Using")')

  //by Exact text match 
  page.locator(':text-is("Using the Grid")')
})

test('User facing locators', async({page}) => {
  await page.getByRole('textbox',{name: "Email"}).first().click()
  await page.getByRole('button', {name: "Sign"}).first().click()
  await page.getByLabel('Email').first().click()
  await page.getByPlaceholder('Jane Doe').click()
  await page.getByText('Using the grid').click()
  await page.getByTestId('SignIn').click()
  await page.getByText('IoT Dashboard').click()

})
 
test('locating child elements', async({page}) =>{
  await page.locator('nb-card nb-radio :text-is("Option 1")').click()
  await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2 ")').click()

  await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()

})