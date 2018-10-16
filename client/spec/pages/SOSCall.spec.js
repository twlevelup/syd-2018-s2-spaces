const SOSCall = require('../../src/js/pages/SOSCall');

describe('SOSCall', () => {
    describe('#render', () => {
        it('should render SOS Call', () => {
            const page = new SOSCall();
            expect(page.render()).toContain("<div>SOSCall</div>");
        });
    });
});