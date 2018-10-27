const BasePage = require('watch-framework').BasePage;

class ICECallPage extends BasePage {
  template = require('../../templates/ICECallPage.hbs');
  homeIcon = require('../../images/homeicon.png')
  callingIcon = require('../../images/calling.png')
  pageWillLoad() {
    //this.contact = StorageHub.getData("selectedContact")
  }
  topButtonEvent() {
    this.navigate('/');
  }

}
module.exports = ICECallPage;
