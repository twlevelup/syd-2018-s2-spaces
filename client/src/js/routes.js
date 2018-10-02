const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const ChecklistPage = require('./pages/checklistPage');
const SOSPage = require('./pages/SOSPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'checklist': ChecklistPage,
  'SOS': SOSPage,
};
