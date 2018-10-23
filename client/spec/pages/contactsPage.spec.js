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
      expect(page.render()).toContain("<span> SELECTED Name: hi</span>");
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
      expect(page.render()).toContain("<span> SELECTED Name: hi2</span>");
      expect(page.render()).toContain("<span> Name: hi</span>");
    });
  });

});
