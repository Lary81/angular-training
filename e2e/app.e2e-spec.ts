import { browser, by, element } from 'protractor/built';

describe('books App', () => {
  it('should display main menu', () => {
    browser.get('/')
    expect(element(by.css('nav')).isPresent()).toBeTruthy()
  });
});
