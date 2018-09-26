const InfoPage = require('../../src/js/pages/InfoPage');
const StorageHub = require('watch-framework').StorageHub;

describe('InfoPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my specific contacts', () => {
      const page = new InfoPage();
      expect(page.render()).toContain("<p>Info Page</p>");
    });
  });

  describe('#topButtonEvent', () =>{
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new InfoPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  })
});
