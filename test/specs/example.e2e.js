import { expect } from 'chai';
// load the axe-core script
import { source } from 'axe-core';

describe('My accesssibility test', () => {
  it('Should check for accessibility issues using Axe', () => {
    browser.url('');
    browser.pause(2000);

    // inject the script
    browser.execute(source);
    const options = { runOnly: { type: 'tag', values: ['wcag2a'] } };
    // run inside browser and get results
    const results = browser.executeAsync((options, done) => {
      axe.run(options, function (err, results) {
        if (err) done(err);
        done(results);
      });
    }, options);

    // assert there are no violations
    console.log(results.violations);
    expect(results.violations.length).to.be.equal(0,'this site does not pass accesibility test');
  })
})
