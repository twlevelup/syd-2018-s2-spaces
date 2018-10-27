const AlertNotification = require('../notifications/AlertNotification');
const BasePage = require('watch-framework').BasePage;
const NotificationHub = require('watch-framework').NotificationHub;
const maps = require('../../images/maps.jpg');

class mapPage extends BasePage {
  pageWillLoad() {
    this.maps = maps;
  }

  template = require('../../templates/mapPage.hbs');

  bottomButtonEvent() {
    NotificationHub.show('map');
  }

  topButtonEvent() {
    this.navigate('/');
  }
}

module.exports = mapPage;
