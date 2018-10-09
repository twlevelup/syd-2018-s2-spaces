const BasePage = require('watch-framework').BasePage;

class InfoPage extends BasePage {
  template = require('../../templates/InfoPage.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
  faceButtonEvent() {
  }
}

module.exports = InfoPage;
