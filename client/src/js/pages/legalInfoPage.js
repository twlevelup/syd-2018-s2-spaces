const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;


class legalInfoPage extends BasePage {

  template = require('../../templates/legalInfoPage.hbs');

  pageWillLoad() {
  }


  leftButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  rightButtonEvent() {
    this.watchFace.scrollTop += 40;
  }

  topButtonEvent() {
    StorageHub.setData('loaded', false);
    this.navigate('/');
  }

}

module.exports = legalInfoPage;