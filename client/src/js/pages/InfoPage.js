const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
class InfoPage extends BasePage {

  template = require('../../templates/InfoPage.hbs');

  pageWillLoad() {
    StorageHub.setData('articles', [
      { title: 'Strategies', article: 'strategiesPage', selected: true },
      { title: 'Identifying Abuse', article: 'identifyingAbusePage', selected: false },
      { title: 'Legal Info', article: 'legalInfoPage', selected: false }
    ]);
    this.articles = StorageHub.getData('articles');
  }

  topButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
  }
}

module.exports = InfoPage;
