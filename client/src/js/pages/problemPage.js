const BasePage = require('watch-framework').BasePage;

class ProblemPage extends BasePage {
  template = require('../../templates/problemPage.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ProblemPage;