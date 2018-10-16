const InfoPage = require('../../src/js/pages/InfoPage');
const StorageHub = require('watch-framework').StorageHub;

describe('InfoPage', () => {
  let watchFace;
  let page;
  beforeAll(() => {
    const props = {
      navigate: () => { }
    };
    page = new InfoPage(props);
  });

  describe('should render the page', () => {
    it('should render my specific articles', () => {
      const articles = [
        { title: 'Strategies', article: 'strategiesPage', selected: true },
      ];
      StorageHub.setData('articles', articles)
      const page = new InfoPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Strategies");
    });
  });

  describe('top button', () => {
    it('goes to the home page on press', () => {
      spyOn(page, 'navigate');
      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});


