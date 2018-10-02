const StorageHub = require('watch-framework').StorageHub;
const InfoPageLanding = require('../../../src/js/pages/landingPages/infoPageLanding');

describe('Info Landing Page', () => {
  it('test', () => {
    const page = new InfoPageLanding();
    expect(page.render()).toContain('<p>Info Landing Page </p>');
  });
});
