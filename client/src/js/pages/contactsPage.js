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
    let nextContact;
    for (let i = 0; i < this.contacts.length; i++) {
      let selectedContact = this.contacts[i];
      if (selectedContact.selected) {
        this.contacts[i].selected = false;
        if(i < this.contacts.length - 1){
          this.contacts[i+1].selected = true;
          nextContact = this.contacts[i+1];
        } else if(i == this.contacts.length - 1){
          this.contacts[0].selected = true;
          nextContact = this.contacts[0];
        }
        break;
      }
    }
    StorageHub.setData('contacts', this.contacts);
    StorageHub.setData('selectedContact', nextContact)
    this.navigate('contacts', true);
  }

  bottomButtonEvent() {
    //PRESS TO CALL A SELECTED CONTACT
    const props = {
      navigate: () => { },
      contact: StorageHub.getData("selectedContact"),
    }
  }


}

module.exports = ContactsPage;
