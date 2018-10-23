const noProblemPage = require('../../src/js/pages/noProblemPage');

describe('noProblemPage', () => {
  describe('#render', () => {
    it('should render the page with the correct information', () => {
      const page = new noProblemPage();
      page.pageWillLoad();

      expect(page.render()).toContain("There doesn't seem to be a problem");
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to home Page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new noProblemPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
