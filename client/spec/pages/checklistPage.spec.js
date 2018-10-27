const checklistPage = require('../../src/js/pages/checklistPage');
const problemPage = require('../../src/js/pages/problemPage');

describe('checklistPage', () => {
  describe('#render', () => {
    it('should render the page with the correct information', () => {
      const page = new checklistPage();
      page.pageWillLoad();
      expect(page.render()).toContain('img')
      expect(page.render()).toContain('Does someone beat you on a regular basis?');
      expect(page.render()).toContain('Yes');
      expect(page.render()).toContain('No');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to problemPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new checklistPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('noProblemPage');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to noProblemPage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new checklistPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('problemPage');
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to homePage', () => {
      const props = {
        navigate: () => { },
      };
      const page = new checklistPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
