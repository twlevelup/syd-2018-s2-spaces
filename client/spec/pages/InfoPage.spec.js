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


  describe('should initialise articles and selectedIndex', () => {

    it('should set defaults when not loaded', () => {
      page.pageWillLoad();
      expect(page.articles.length).toBe(3)
      expect(page.articles[0].selected).toBe(true)
      expect(StorageHub.getData('loaded')).toBe(true)
    })

    it('should reuse existing data when loaded', () => {
      StorageHub.setData('loaded', true)
      StorageHub.setData('articles', [{title: 'Article 1'}, {title: 'Article 2'}])
      StorageHub.setData('selectedIndex', 1)
      page.pageWillLoad();
      expect(page.articles.length).toBe(2)
      expect(page.articles[0].selected).toBe(false)
      expect(page.articles[1].selected).toBe(true)
    })
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

  describe('bottom button', () => {

    beforeEach(() => {
      StorageHub.setData('loaded', true);
      StorageHub.setData('articles', [
        {title: 'Article 1', articlePage: 'article1Page'}, 
        {title: 'Article 2', articlePage: 'article2Page'}, 
        {title: 'Article 3', articlePage: 'article3Page'}
      ]);
    })

    it('goes to the selected article page on press', () => {
      StorageHub.setData('selectedIndex', 0);
      page.pageWillLoad();
      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('article1Page');
    });

    it('goes to the selected article page on press', () => {
      StorageHub.setData('selectedIndex', 2);
      page.pageWillLoad();
      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('article3Page');
    });
  });

  describe('right button', () => {

    beforeEach(() => {
      StorageHub.setData('loaded', true);
      StorageHub.setData('articles', [
        {title: 'Article 1'}, 
        {title: 'Article 2'}, 
        {title: 'Article 3'},
      ]);
    })
    
    it('reloads the page', () => {
      StorageHub.setData('selectedIndex', 0);
      page.pageWillLoad();

      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.rightButtonEvent();
      expect(StorageHub.setData).toBeCalledWith('selectedIndex', 1);
      expect(page.navigate).toHaveBeenCalledWith('infoPage', true);
    });

    it('should roll over to start of list', () => {
      StorageHub.setData('selectedIndex', 2);
      page.pageWillLoad();

      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.rightButtonEvent();
      expect(StorageHub.setData).toBeCalledWith('selectedIndex', 0);
      expect(page.navigate).toHaveBeenCalledWith('infoPage', true);
 
    })
  });

  describe('left button', () => {

    beforeEach(() => {
      StorageHub.setData('loaded', true);
      StorageHub.setData('articles', [{title: 'Article 1'}, {title: 'Article 2'}, {title: 'Article 3'}]);
    })
    it('reloads the page', () => {
      StorageHub.setData('selectedIndex', 1);
     
      page.pageWillLoad();

      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.leftButtonEvent();
      expect(StorageHub.setData).toBeCalledWith('selectedIndex', 0);
      expect(page.navigate).toHaveBeenCalledWith('infoPage', true);
    });

    it('should roll over to end of list', () => {
      StorageHub.setData('selectedIndex', 0);
     
      page.pageWillLoad();

      spyOn(StorageHub, 'setData');
      spyOn(page, 'navigate');
      page.leftButtonEvent();
      expect(StorageHub.setData).toBeCalledWith('selectedIndex', 2);
      expect(page.navigate).toHaveBeenCalledWith('infoPage', true);
    })
  });
});


