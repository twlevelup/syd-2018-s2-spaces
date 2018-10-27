const BasePage = require('watch-framework').BasePage;

class SOSPage extends BasePage {

  countdown = 10;
  template = require('../../templates/SOSPage.hbs');

  pageWillLoad() {
    this.countdown = 10;
    setInterval(() => this.timerCallBack(), 1000)
  }

  rightButtonEvent() {
    this.navigate('SOSCall');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  timerCallBack() {
    this.countdown -= 1;
    if(this.countdown == 0){
      this.navigate("SOSCall");
    }
  }
}

module.exports = SOSPage;
