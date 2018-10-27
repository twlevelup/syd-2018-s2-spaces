const BasePage = require('watch-framework').BasePage;


class legalInfoPage extends BasePage {

  template = require('../../templates/legalInfoPage.hbs');

  pageWillLoad() {
  }

}

module.exports = legalInfoPage;