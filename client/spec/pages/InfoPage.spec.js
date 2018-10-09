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
  });

  describe('top button', () => {
    it('goes to the home page on press', () => {
      spyOn(page, 'navigate');
      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  // describe('face button', () => {
  //   it('goes to home page', () => {
  //     spyOn(page, 'navigate');
  //     page.faceButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('/');
  //   });
  // });
});
