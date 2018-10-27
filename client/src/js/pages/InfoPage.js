const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
class InfoPage extends BasePage {

  template = require('../../templates/InfoPage.hbs');

  pageWillLoad() {
    if (StorageHub.getData('loaded') != true) {
      StorageHub.setData('articles', [
        { title: 'Strategies', articlePage: 'strategiesPage' },
        { title: 'Identifying Abuse', articlePage: 'identifyingAbusePage' },
        { title: 'Legal Info', articlePage: 'legalInfoPage' },
      ]);
      StorageHub.setData('selectedIndex', 0);
      StorageHub.setData('loaded', true);
    }
    this.selectedIdx = StorageHub.getData('selectedIndex');
    this.articles = StorageHub.getData('articles').map((article, index) => ({
      ...article,
      selected: index == this.selectedIdx,
    }));
  }

  topButtonEvent() {
    this.navigate('/');
    StorageHub.setData('loaded', false);
  }

  rightButtonEvent() {

    if (this.selectedIdx < this.articles.length - 1) {
      StorageHub.setData('selectedIndex', this.selectedIdx + 1);
    } else {
      StorageHub.setData('selectedIndex', 0)
    }
    this.navigate("infoPage", true);
  }

  leftButtonEvent() {

    let nextIndex;
    if (this.selectedIdx == 0) {
      nextIndex = this.articles.length - 1;
    } else {
      nextIndex = this.selectedIdx - 1;
    }

    StorageHub.setData('selectedIndex', nextIndex);
    this.navigate("infoPage", true);
  }

  bottomButtonEvent() {
    this.selectedIdx = StorageHub.getData('selectedIndex');
    this.navigate(this.articles[this.selectedIdx].articlePage);
  }
}

module.exports = InfoPage;
