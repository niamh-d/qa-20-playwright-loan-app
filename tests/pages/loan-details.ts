import { Locator, Page } from '@playwright/test'
import BasePage from './base-page'

export default class LoanDetailsPage extends BasePage {
  readonly continueButton: Locator

  constructor(page: Page) {
    super(page)

    this.continueButton = this.page.getByTestId('final-page-continue-button')
  }
}
