const SOSApp = require('../../src/js/pages/SOSApp');

describe('SOSApp', () => {
    describe('#render', () => {
        it('should render SOS App', () => {
            const page = new SOSApp();
            expect(page.render()).toContain("<div>SOSApp</div>");
        });
    });
});