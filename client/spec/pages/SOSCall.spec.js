const SOSCall = require('../../src/js/pages/SOSCall');

describe('SOSCall', () => {
  describe('#render', () => {
    it('should render SOS Call', () => {
      const page = new SOSCall();
      expect(page.render()).toMatchSnapshot()
    }); //do not touch formatting haha
  });
  describe('#topButtonEvent', () => {
    it('goes to Home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new SOSCall(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');

    });
  });
});
