const SOSPage = require('../../src/js/pages/SOSPage');

describe('SOSPage', () => {
    describe('#render', () => {
        it('should show SOS page', () => {
            const page = new SOSPage();
            expect(page.render()).toContain("SOS");
            expect(page.render()).toContain("ICE");
        });
    });

    describe('#faceButtonEvent', () => {
        it('goes to SOS App', () => {
            const props = {
                navigate: () => { },
            };
    
          const page = new SOSPage(props);
          spyOn(page, 'navigate');
    
          page.faceButtonEvent();
          expect(page.navigate).toHaveBeenCalledWith('SOSApp');
    
        });
      });
});
