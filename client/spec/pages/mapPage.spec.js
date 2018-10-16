const mapPage = require('../../src/js/pages/mapPage');

describe('mapPage', () => {
    describe('#render', () => {
        it('should show Map page', () => {
            const page = new mapPage();
            expect(page.render()).toContain("<div class=\"mapdiv\"><img src=\"\"></div>");
        });
    });

    // describe('#leftButtonEvent', () => {
    //     it('goes to SOS App', () => {
    //         const props = {
    //             navigate: () => { },
    //         };
    
    //       const page = new SOSPage(props);
    //       spyOn(page, 'navigate');
    
    //       page.leftButtonEvent();
    //       expect(page.navigate).toHaveBeenCalledWith('SOSApp');
    
    //     });
    //   });
});
