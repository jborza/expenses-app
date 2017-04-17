import { ExpensesAppPage } from './app.po';

describe('expenses-app App', () => {
  let page: ExpensesAppPage;

  beforeEach(() => {
    page = new ExpensesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
