import { expect, Locator, Page } from '@playwright/test'

const url = 'https://loan-app.tallinn-learning.ee/small-loan'

export default class LoanPage {
  readonly page: Page
  readonly url: string
  readonly amountField: Locator
  readonly errorMessage: Locator
  readonly applyNowButton: Locator
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly continueButton: Locator

  constructor(page: Page) {
    this.page = page
    this.url = url
    this.amountField = this.page.getByTestId('id-small-loan-calculator-field-amount')
    this.errorMessage = this.page.getByTestId('id-small-loan-calculator-field-error')
    this.applyNowButton = this.page.getByTestId('id-small-loan-calculator-field-apply')
    this.passwordField = this.page.getByTestId('login-popup-password-input')
    this.usernameField = this.page.getByTestId('login-popup-username-input')
    this.continueButton = this.page.getByTestId('login-popup-continue-button')
  }

  public async open(): Promise<void> {
    await this.page.goto(this.url)
  }
}
