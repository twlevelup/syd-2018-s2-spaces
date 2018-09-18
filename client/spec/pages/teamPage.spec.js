const TeamPage = require('../../src/js/pages/teamPage');

describe('TeamPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my team page', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("<h1>Made by:</h1>");
    });
    it('should contain team members names', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("Cleber");
      expect(page.render()).toContain("Connor");
    });
  });

});
