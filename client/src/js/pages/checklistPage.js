const BasePage = require('watch-framework').BasePage;

class ChecklistPage extends BasePage {
  template = require('../../templates/checklistPage.hbs');

  rightButtonEvent() {
    this.navigate('noProblemPage');
  }

  leftButtonEvent() {
    this.navigate('problemPage');
  }

  topButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ChecklistPage;