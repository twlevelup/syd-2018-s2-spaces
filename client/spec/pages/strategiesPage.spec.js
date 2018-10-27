const strategiesPage = require('../../src/js/pages/strategiesPage');


describe('#leftButtonEvent', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  it('Left button scrolls page down', () => {

    const page = new strategiesPage({ watchFace });

    page.leftButtonEvent();

    expect(watchFace.scrollTop).toEqual(-40);

  });
});

describe('#rightButtonEvent', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });
  
  it('Right button scrolls page up', () => {
    const page = new strategiesPage({ watchFace });

    page.rightButtonEvent();

    expect(watchFace.scrollTop).toEqual(40);
  });

  describe('top button', () => {
    let page;
    beforeAll(() => {
      const props = {
        navigate: () => { }
      };
      page = new strategiesPage(props);
    });

    it('goes to the home page on press', () => {
      spyOn(page, 'navigate');
      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});