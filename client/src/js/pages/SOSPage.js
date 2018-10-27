const BasePage = require('watch-framework').BasePage;

class SOSPage extends BasePage {
    template = require('../../templates/SOSPage.hbs');

    rightButtonEvent() {
      this.navigate('SOSCall');
    }
   
    leftButtonEvent() {
      this.navigate('/');
    }
}

module.exports = SOSPage;
