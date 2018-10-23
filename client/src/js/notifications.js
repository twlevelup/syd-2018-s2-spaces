const AlertNotification = require('./notifications/AlertNotification');
const MapNotification = require('./notifications/mapNotification');

const notifications = [
  {
    type: 'alert',
    label: 'Alert',
    defaultValue: 'This is a test alert',
    view: AlertNotification
  },
  {
    type: 'base',
    label: 'Base',
    defaultValue: 'This is a test base notification'
  },
  {
    type: 'map',
    label: 'map',
    view: MapNotification
  }
];

module.exports = notifications;
