const BasePage = require('watch-framework').BasePage;

class ICECallPage extends BasePage {
    template = require('../../templates/ICECallPage.hbs');
    pageWillLoad() {
        //this.contact = StorageHub.getData("selectedContact")
    }
    topButtonEvent() {
        this.navigate('/');
    }

}
module.exports = ICECallPage;