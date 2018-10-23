const BasePage = require('watch-framework').BasePage;

class NoProblemPage extends BasePage {
  template = require('../../templates/noProblemPage.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
}

module.exports = NoProblemPage;