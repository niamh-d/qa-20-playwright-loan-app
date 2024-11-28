import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import LoanPage from '../pages/loan-app'

test.describe('Loan app', () => {
  let loanPage: LoanPage

  test.beforeEach(async ({ page }) => {
    loanPage = new LoanPage(page)
    await loanPage.open()
  })
  test.describe('Loan app tests', () => {
    test('Negative scenario with amount less than min. amount', async ({}) => {
      await loanPage.amountField.fill('100')
      await expect(loanPage.errorMessage).toBeVisible()
    })

    test('Positive scenario with default data and login', async ({}) => {
      await loanPage.applyNowButton.click()
      await expect(loanPage.continueButton).toBeDisabled()
      await loanPage.usernameField.fill(faker.internet.username())
      await loanPage.passwordField.fill(faker.internet.password())
      await expect(loanPage.continueButton).toBeEnabled()
    })
  })
})
