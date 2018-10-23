const checklistPage = require('../../src/js/pages/checklistPage');

describe('checklistPage', () => {
  describe('#render', () => {
    it('should render the page with the correct information', () => {
      const page = new checklistPage();
      page.pageWillLoad();

      expect(page.render()).toContain("<div>Does someone beat you on a regular basis?</div>");
      expect(page.render()).toContain("<div>Yes</div>");
      expect(page.render()).toContain("<div>No</div>");
    });
  });
});
