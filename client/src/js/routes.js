const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const SOSPage = require('./pages/SOSPage');
const SOSApp = require('./pages/SOSApp');
const InfoPageLanding = require('./pages/landingPages/infoPageLanding');
const InfoPage = require('./pages/InfoPage');

module.exports = {
  '/': HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  '404': FourOhFour,
  SOSPage: SOSPage,
  SOSApp: SOSApp,
  infoLandingPage: InfoPageLanding,
  // Put other landing pages above this line and app pages underneath
  infoPage: InfoPage
};
