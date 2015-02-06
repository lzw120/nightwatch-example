#!/usr/bin/env node
require('nightwatch/bin/runner.js');

module.exports = {
  "Demo test Google" : function (browser) {
    browser
      .url('https://www.applyweb.com/stanford/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a', 1000)
      .click('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a')
      .setValue('#j_username', 'seven.lea@gmail.com')
      .setValue('#j_password', 'test')
      .click('body > div.wrapper > div.container > div > div > div.hollow-wrap > div.hollow > div > div.span8.barrier-left > form > div.form-actions > button')
      .pause(5000)
      .end();
  }
};
