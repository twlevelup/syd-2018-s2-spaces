const problemPage = require('../../src/js/pages/problemPage');

describe('problemPage', () => {
  describe('#render', () => {
    it('should render the page with the correct information', () => {
      const page = new problemPage();
      page.pageWillLoad();

      expect(page.render()).toContain("Seems there's a problem...");
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to home Page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new problemPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
