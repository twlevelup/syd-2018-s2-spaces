const problemPage = require('../../src/js/pages/problemPage');

describe('problemPage', () => {
  describe('#render', () => {
    it('should render the page with the correct information', () => {
      const page = new problemPage();
      page.pageWillLoad();

      expect(page.render()).toContain("Seems there's a problem...");
    });
  });
});
