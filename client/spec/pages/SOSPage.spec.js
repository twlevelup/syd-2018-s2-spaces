const SOSPage = require('../../src/js/pages/SOSPage');

describe('SOSPage', () => {
  describe('#render', () => {
    it('should show SOS page', () => {
      const page = new SOSPage();
      expect(page.render()).toContain("YES");
      expect(page.render()).toContain("Are you safe?");
      expect(page.render()).toContain("NO");
    });
  });

  describe('#pageWillLoad', () => {
    let page;
    const props = {
      navigate: () => { },
    };
    beforeEach(() => {
      jest.useFakeTimers();
      page = new SOSPage(props);
      spyOn(page, 'navigate');

    })

    it('should initialise countdown as 10', () => {
      page.pageWillLoad();
      expect(page.countdown).toBe(10);
    })

    it('should countdown to 5 after 5 seconds', () => {
      page.pageWillLoad();
      jest.runTimersToTime(5000);
      expect(page.countdown).toBe(5);
    })

    it('should countdown to 0 after 10 seconds', () => {
      page.pageWillLoad();
      jest.runTimersToTime(10000);
      expect(page.countdown).toBe(0);
      expect(page.navigate).toHaveBeenCalledWith('SOSCall');

    })
  })

  describe('#rightButtonEvent', () => {
    it('goes to SOS Call', () => {
      const props = {
        navigate: () => { },
      };

      const page = new SOSPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();

      expect(page.navigate).toHaveBeenCalledWith('SOSCall');

    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to Home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new SOSPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');

    });
  });
});
