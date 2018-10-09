const BasePage = require('watch-framework').BasePage;

class InfoPage extends BasePage {
  template = require('../../templates/InfoPage.hbs');
  articles = ["Strategies", "Identifying Abuse", "Legal Info"]

  topButtonEvent() {
    this.navigate('/');
  }
  faceButtonEvent() {

  }
}

module.exports = InfoPage;
