import { BmfAppPage } from './app.po';

describe('bmf-app App', () => {
  let page: BmfAppPage;

  beforeEach(() => {
    page = new BmfAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
