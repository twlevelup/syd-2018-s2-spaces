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

    describe('#bottomButtonEvent', () => {
        it('goes to SOS Call', () => {
            const props = {
                navigate: () => { },
            };
    
          const page = new SOSPage(props);
          spyOn(page, 'navigate');
    
          page.bottomButtonEvent();
          expect(page.navigate).toHaveBeenCalledWith('SOSCall');
    
        });
      });

      describe('#topButtonEvent', () => {
        it('goes to Home page', () => {
            const props = {
                navigate: () => { },
            };
    
          const page = new SOSPage(props);
          spyOn(page, 'navigate');
    
          page.topButtonEvent();
          expect(page.navigate).toHaveBeenCalledWith('/');
    
        });
      });
});
