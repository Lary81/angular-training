import { browser, by, element } from 'protractor';

export class BooksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('la-root h1')).getText();
  }
}
