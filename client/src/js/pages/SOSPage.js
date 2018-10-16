const BasePage = require('watch-framework').BasePage;

class SOSPage extends BasePage {
    template = require('../../templates/SOSPage.hbs');

    bottomButtonEvent() {
      this.navigate('SOSApp');
    }
}

module.exports = SOSPage;
