const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const ChecklistPage = require('./pages/checklistPage');
const SOSPage = require('./pages/SOSPage');
const SOSCall = require('./pages/SOSCall');
const InfoPage = require('./pages/InfoPage');
const MapPage = require('./pages/mapPage');

module.exports = {
  '/': HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  '404': FourOhFour,
  'checklist': ChecklistPage,
  SOSPage: SOSPage,
  SOSCall: SOSCall,
  // Put other landing pages above this line and app pages underneath
  infoPage: InfoPage,
  mapPage: MapPage

};
