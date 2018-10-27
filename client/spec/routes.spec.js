const routes = require('../src/js/routes');

describe('routes', () => {
  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['checklistPage']).toBeDefined();
    expect(routes['problemPage']).toBeDefined();
    expect(routes['SOSPage']).toBeDefined();
    expect(routes['SOSCall']).toBeDefined();
    expect(routes['infoPage']).toBeDefined();
    expect(routes['strategiesPage']).toBeDefined();
    expect(routes['legalInfoPage']).toBeDefined();
    expect(routes['identifyingAbusePage']).toBeDefined();
  });
});
