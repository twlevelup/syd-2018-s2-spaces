const mapPage = require('../../src/js/pages/mapPage');
const NotificationHub = require('watch-framework').NotificationHub;

describe('mapPage', () => {
  describe('#render', () => {
    it('should show Map page', () => {
      const page = new mapPage();
      expect(page.render()).toContain('<div class="mapdiv"><img src=""></div>');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('shows emmergency numbers', () => {
      const page = new mapPage();
      NotificationHub.show = jest.fn();
      page.bottomButtonEvent();
      expect(NotificationHub.show).toHaveBeenCalledWith('map');
    });
  });
});
