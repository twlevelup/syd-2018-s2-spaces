const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;


class identifyingAbusePage extends BasePage {

  template = require('../../templates/identifyingAbusePage.hbs');

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

module.exports = identifyingAbusePage;