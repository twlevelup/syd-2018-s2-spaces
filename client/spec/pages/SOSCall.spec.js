const SOSCall = require('../../src/js/pages/SOSCall');

describe('SOSCall', () => {
    describe('#render', () => {
        it('should render SOS Call', () => {
            const page = new SOSCall();
            expect(page.render())
            .toContain(
                `<div class=\"container\">
    <div>Cancel</div>
    <div>Calling Police...</div>
    <div></div>
</div>`)
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