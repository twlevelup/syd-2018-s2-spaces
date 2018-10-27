const ContactsPage = require('../../src/js/pages/contactsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('ContactsPage', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    const contacts = [
      { name: 'hi', phoneNumber: '1234', selected: true },
      { name: 'hi2', phoneNumber: '12345', selected: false },
      { name: 'hi3', phoneNumber: '123456', selected: false },
    ];
    const props = {
      navigate: () => { },
    };
    StorageHub.setData('contacts', contacts)
    page = new ContactsPage(props);

  });

  describe('#render', () => {
    it('should render my specific contacts', () => {
      page.pageWillLoad();
      expect(page.render()).toContain("Name: hi");
      expect(page.render()).toContain("Phone: 1234");
    });

    it('should select the first contact', () => {
      page.pageWillLoad();
      expect(page.render()).toContain("<span> --- Name: hi ---</span>");
    });

    it('should not select the other contacts', () => {
      page.pageWillLoad();
      expect(page.render()).toContain("<span> Name: hi2</span>");
    });

  });

  describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new ContactsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('should move the selector down the list', () => {
      page.pageWillLoad();

      page.rightButtonEvent();

      const contacts = StorageHub.getData("contacts")
      let selectedItem = "";
      let nextItem = "";
      for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact.selected) {
          selectedItem = contact.name;
          if (i < contacts.length - 1) {
            nextItem = contacts[i + 1].name
          }
          break;
        }
      }

      
      expect(page.render()).toContain("<span> --- Name: " + selectedItem + " ---</span>");
      if (nextItem != "") {
        expect(page.render()).toContain("<span> Name: " + nextItem + "</span>");
      }
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should call the selected contact', () => {
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('ICE');
    });

  });

});
