const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../images/logo.png');
const sosImage = require('../../images/SOS.png');
const plop = './sounds/plop.mp3';

class HomePage extends BasePage {
  template = require('../../templates/homePage.hbs');

  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111', selected: true },
      { name: 'Sinan', phoneNumber: '0431 222 222', selected: false },
      { name: 'Jafari', phoneNumber: '0431 333 333', selected: false },
    ])

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.day = dateTime.day.toUpperCase();
    this.time = dateTime.time;
    this.period = dateTime.period;
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString('en-AU', { hour: "numeric", minute: "numeric", weekday: "long", day: "numeric", month: "numeric", year: "numeric" }).trim().split(",");
    const [time, period] = dateTime[2].trim().split(' ');
    return {
      day: dateTime[0],
      date: dateTime[1],
      time,
      period,
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  rightButtonEvent() {
    this.navigate('SOSPage');
  }

  leftButtonEvent() {
    this.navigate('mapPage');
  }

  topButtonEvent() {
    this.navigate('checklistPage');
  }

  bottomButtonEvent() {
    this.navigate('infoPage');
  }

  faceButtonEvent() {
    this.navigate('contacts');
  }
}

module.exports = HomePage;
