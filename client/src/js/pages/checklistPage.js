const BasePage = require('watch-framework').BasePage;

class ChecklistPage extends BasePage {
  template = require('../../templates/checklistPage.hbs');
}

module.exports = ChecklistPage;