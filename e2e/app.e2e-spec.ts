import { BooksPage } from './app.po';

describe('books App', () => {
  let page: BooksPage;

  beforeEach(() => {
    page = new BooksPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to la!!'))
      .then(done, done.fail);
  });
});
