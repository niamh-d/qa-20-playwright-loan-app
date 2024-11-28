import { Page } from '@playwright/test'

export default abstract class BasePage {
  readonly page: Page

  protected constructor(page: Page) {
    this.page = page
  }
}
