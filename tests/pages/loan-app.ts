import { Locator, Page } from '@playwright/test'
import BasePage from './base-page'
import LoanDetailsPage from './loan-details'

const url = 'https://loan-app.tallinn-learning.ee/small-loan'

export default class LoanPage extends BasePage {
  readonly url: string
  readonly amountField: Locator
  readonly errorMessage: Locator
  readonly applyNowButton: Locator
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly continueButton: Locator
  readonly applyForLoanButton: Locator

  constructor(page: Page) {
    super(page)
    this.url = url
    this.amountField = this.page.getByTestId('id-small-loan-calculator-field-amount')
    this.errorMessage = this.page.getByTestId('id-small-loan-calculator-field-error')
    this.applyNowButton = this.page.getByTestId('id-small-loan-calculator-field-apply')
    this.passwordField = this.page.getByTestId('login-popup-password-input')
    this.usernameField = this.page.getByTestId('login-popup-username-input')
    this.continueButton = this.page.getByTestId('login-popup-continue-button')
    this.applyForLoanButton = this.page.getByTestId('id-image-element-button-image-2')
  }

  public async open(): Promise<void> {
    await this.page.goto(this.url)
  }

  async clickContinueAndReturnLoanDetailsPage(): Promise<LoanDetailsPage> {
    await this.continueButton.click()
    return new LoanDetailsPage(this.page)
  }
}
