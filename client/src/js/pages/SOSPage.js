const BasePage = require('watch-framework').BasePage;

class SOSPage extends BasePage {

  template = require('../../templates/SOSPage.hbs');

  pageWillLoad() {
    this.countdown = 10;
    this.interval = setInterval(() => this.timerCallBack(), 1000)
  }

  rightButtonEvent() {
    clearInterval(this.interval);
    this.navigate('SOSCall');
  }

  leftButtonEvent() {
    clearInterval(this.interval);
    this.navigate('/');
  }

  topButtonEvent() {
    clearInterval(this.interval);
    this.navigate('/');
  }

  timerCallBack() {
    this.countdown -= 1;
    if (this.countdown == 0) {
      clearInterval(this.interval);
      this.navigate("SOSCall");
    } else {
      document.getElementById('sosPageCountdown').innerText = this.countdown;
    }
  }
}

module.exports = SOSPage;
