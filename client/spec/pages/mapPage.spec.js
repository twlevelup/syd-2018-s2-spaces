const mapPage = require('../../src/js/pages/mapPage');
const NotificationHub = require('watch-framework').NotificationHub;

describe('mapPage', () => {
  describe('#render', () => {
    it('should show Map page', () => {
      const page = new mapPage();
      expect(page.render()).toContain('<div class="mapdiv"><img src=""></div>');
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to homePage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new mapPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
