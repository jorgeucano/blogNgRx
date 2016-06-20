import { ReactiveRouterAngular2Page } from './app.po';

describe('reactive-router-angular2 App', function() {
  let page: ReactiveRouterAngular2Page;

  beforeEach(() => {
    page = new ReactiveRouterAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
