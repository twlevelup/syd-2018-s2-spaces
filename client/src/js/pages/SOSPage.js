const BasePage = require('watch-framework').BasePage;

class SOSPage extends BasePage {
    template = require('../../templates/SOSPage.hbs');

    faceButtonEvent() {
        this.navigate('SOSApp');
      }
}

module.exports = SOSPage;