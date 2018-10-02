const StorageHub = require('watch-framework').StorageHub;
const InfoPageLanding = require('../../../src/js/pages/landingPages/infoPageLanding');

describe('Info Landing Page', () => {
  let page;
  beforeAll(() => {
    const props = {
      navigate: () => {}
    };
    page = new InfoPageLanding(props);
  });

  it('should render correctly', () => {
    expect(page.render()).toContain('<p>Info Landing Page </p>');
  });

  describe('face button', () => {
    it('should open the app page', () => {
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('infoPage');
    });
  });

  describe('top button', () => {
    it('should take user to home page', () => {
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
