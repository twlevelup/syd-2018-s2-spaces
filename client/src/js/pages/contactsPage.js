const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends BasePage {
  template = require('../../templates/contactsPage.hbs');

  pageWillLoad() {
    this.contacts = StorageHub.getData('contacts');
  }

  topButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.contacts[0].selected = false;
    this.contacts[1].selected = true;
    StorageHub.setData('contacts', this.contacts);
    this.navigate('contacts', true);
  }

  bottomButtonEvent() {
    //PRESS TO CALL A SELECTED CONTACT
  }


}

module.exports = ContactsPage;
