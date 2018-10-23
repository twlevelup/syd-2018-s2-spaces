const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends BasePage {
  template = require('../../templates/contactsPage.hbs');

  pageWillLoad() {   
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111', selected: true },
      { name: 'Sinan', phoneNumber: '0431 222 222', selected: false },
      { name: 'Jafari', phoneNumber: '0431 333 333', selected: false },
    ])

    this.contacts = StorageHub.getData('contacts')
  }

  topButtonEvent() {
    this.navigate('/');
  }
  
  rightButtonEvent() {
    
  }

  bottomButtonEvent(){
    //PRESS TO CALL A SELECTED CONTACT
  }


}

module.exports = ContactsPage;
