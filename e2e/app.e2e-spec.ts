import { RkbyggdemoPage } from './app.po';

describe('rkbyggdemo App', function() {
  let page: RkbyggdemoPage;

  beforeEach(() => {
    page = new RkbyggdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
