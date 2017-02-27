import { Productsv2Page } from './app.po';

describe('productsv2 App', function() {
  let page: Productsv2Page;

  beforeEach(() => {
    page = new Productsv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
