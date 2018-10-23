const mapNotification = require('../../src/js/notifications/mapNotification');

describe('mapNotification', () => {
  describe('#render', () => {
    it('should render my page correctly', () => {
      const notification = new mapNotification();
      expect(notification.render()).toContain('Emergency Numbers:');
    });
  });
});
