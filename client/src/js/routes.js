const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const ChecklistPage = require('./pages/checklistPage');
const ProblemPage = require('./pages/problemPage');
const NoProblemPage = require('./pages/noProblemPage');
const SOSPage = require('./pages/SOSPage');
const SOSCall = require('./pages/SOSCall');
const InfoPage = require('./pages/InfoPage');
const MapPage = require('./pages/mapPage');

const StrategiesPage = require('./pages/strategiesPage');

module.exports = {
  '/': HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  '404': FourOhFour,
  'checklistPage': ChecklistPage,
  'problemPage': ProblemPage,
  'noProblemPage': NoProblemPage,
  SOSPage: SOSPage,
  SOSCall: SOSCall,
  // Put other landing pages above this line and app pages underneath
  infoPage: InfoPage,
  mapPage: MapPage,
  strategiesPage: StrategiesPage,
};
