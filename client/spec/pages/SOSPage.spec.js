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
