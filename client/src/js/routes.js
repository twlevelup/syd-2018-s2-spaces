const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SOSPage = require('./pages/SOSPage');
const SOSApp = require('./pages/SOSApp');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'SOSPage': SOSPage,
  'SOSApp': SOSApp
};