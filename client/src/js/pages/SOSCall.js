const BasePage = require('watch-framework').BasePage;

class SOSCall extends BasePage {
    template = require('../../templates/SOSCall.hbs');

topButtonEvent() {
    this.navigate('/');
  }

}
module.exports = SOSCall;
