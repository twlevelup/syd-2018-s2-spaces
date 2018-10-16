const BasePage = require('watch-framework').BasePage;
const maps = require('../../images/maps.jpg');

class mapPage extends BasePage {
    pageWillLoad() {
        this.maps = maps
    }

    template = require('../../templates/mapPage.hbs');


    // leftButtonEvent() {
    //   this.navigate('mapPage');
    // }
}

module.exports = mapPage;