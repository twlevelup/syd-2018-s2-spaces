const SOSPage = require('../../src/js/pages/SOSPage');

describe('SOSPage', () => {
    describe('#render', () => {
        it('should show SOS page', () => {
            const page = new SOSPage();
            expect(page.render()).toContain("SOS");
            expect(page.render()).toContain("ICE");
        });
    });

    describe('#leftButtonEvent', () => {
        it('goes to SOS App', () => {
            const props = {
                navigate: () => { },
            };
    
          const page = new SOSPage(props);
          spyOn(page, 'navigate');
    
          page.leftButtonEvent();
          expect(page.navigate).toHaveBeenCalledWith('SOSApp');
    
        });
      });
});
