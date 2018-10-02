const BasePage = require('watch-framework').BasePage;

class InfoPageLanding extends BasePage {
  template = require('../../../templates/landingPages/infoPageLanding.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
  faceButtonEvent() {
    this.navigate('infoPage');
  }
}

module.exports = InfoPageLanding;
