const BaseNotification = require('watch-framework').BaseNotification;

module.exports = class mapNotification extends BaseNotification {
  template = require('../../templates/mapNotification.hbs');
};
