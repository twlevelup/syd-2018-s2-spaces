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

  it('should render the page', () => {
    expect(page.render()).toContain('<p>Info Page</p>');
    expect(page.render()).toContain('Strategies');
    expect(page.render()).toContain('Identifying Abuse');
    expect(page.render()).toContain('Legal Info');
  });

  describe('top button', () => {
    it('goes to the home page on press', () => {
      spyOn(page, 'navigate');
      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
