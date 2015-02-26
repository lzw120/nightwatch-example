#!/usr/bin/env node
require('nightwatch/bin/runner.js');


var register = function (browser) {
    browser
      .url('https://www.applyweb.com/stanford/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a', 1000)
      //Apply now
      .click('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a')
      // Register
      .click('body > div.wrapper > div.container > div > div > div.hollow-wrap > div.hollow > div > div.span8.barrier-left > form > div.form-actions > a')
      .setValue('#email', 'lzwguanggao3@gmail.com')
      .setValue('#password', '1Haolu.com!')
      .setValue('#confirmPassword', '1Haolu.com!')
      .setValue('#firstName', 'Steve')
      .setValue('#lastName', 'Lee')
      .setValue('#gender', 'Male')
      .setValue('#date-input', '01/01/1990')
      .setValue('#homeNumber', '6111111111')
      .setValue('#mobileNumber', '1234567890')
      .click('#actForm > fieldset > div:nth-child(15) > div > label')
      .click('#actForm > fieldset > div.form-actions > button')
      .click('body > div.wrapper > div.container > div > div > ul > li:nth-child(2) > a')
      .pause(10000)
      .end();
}

var getPage = function(browser) {
  browser
  .getValue('#ufe-content > div:nth-child(16) > input[type="hidden"]')
}

var fillPage2 = function(browser) {
  // Apply page2
  browser
  .setValue('#STANFORD-MARITAL_STATUS', 'S')
  .setValue('#GENDER_M', 'M')
  .setValue('#STANFORD-BIRTH_DATE_month', '01')
  .setValue('#STANFORD-BIRTH_DATE_day','01')
  .setValue('#STANFORD-BIRTH_DATE_year', '1990')
  .pause(1000)
  .setValue('#STANFORD-BIRTH_COUNTRY', 'People')
  .pause(1000)
  .setValue('#STANFORD-BIRTH_CITY', 'Beijing')
  .pause(1000)
  .setValue('#STANFORD-CITIZENSHIP_COUNTRY', 'People')
  .click('#personal_info_2 > div:nth-child(21) > label:nth-child(9)')
  .setValue('#STANFORD-VISA_TYPE > option:nth-child(9)', 'OTH')
  .click('#ufe-nav-btn-NEXTPAGE')
}

var fillPage3 = function(browser) {
  browser
  .click('#ufe-content > fieldset:nth-child(12) > div:nth-child(4) > label:nth-child(6)')
  .click('#STANFORD-ETHNIC_DECLINE_Y_Y')
  .click('#STANFORD-MILITARY_STATUS_Decline_to_State')
  .click('#ufe-nav-btn-NEXTPAGE')
}

var fillPage4 = function(browser) {
  browser
  .setValue('#STANFORD-MAIL_ADDR_VALID_DATE_month', '01')
  .setValue('#STANFORD-MAIL_ADDR_VALID_DATE_day', '01')
  .setValue('#STANFORD-MAIL_ADDR_VALID_DATE_year', '2021')
  .setValue('#STANFORD-MAIL_STREET', 'Apt01')
  .setValue('#STANFORD-MAIL_STREET2', 'Apt02')
  .setValue('#STANFORD-MAIL_CITY', 'Boston')
  .setValue('#STANFORD-MAIL_COUNTRY', 'People')
  .setValue('#STANFORD-MAIL_POSTAL', '02148')
  .click('#STANFORD-PERM_SAME_AS_MAILING_Y')
  .click('#ufe-nav-btn-NEXTPAGE')
}

var fillPage5 = function(browser) {
  browser.pause(5000)
  browser.frame(0)
  browser
  .click('#isc_Otable > tbody > tr:nth-child(64)')
  .click('#isc_9Ntable > tbody > tr > td > div > nobr')
  .click('#isc_AI')
  .pause(10000)
}

var loginIn = function(browser) {
  console.log('Hello World')
  browser
  .url('https://www.applyweb.com/stanford/')
  .waitForElementVisible('body', 1000)
  .waitForElementVisible('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a', 1000)
  //Apply now
  .click('#ufe-content > div:nth-child(6) > ol > li:nth-child(1) > a')
  .setValue('#j_username', 'lzwguanggao@gmail.com')
  .setValue('#j_password', '1Haolu.com!')
  .click('body > div.wrapper > div.container > div > div > div.hollow-wrap > div.hollow > div > div.span8.barrier-left > form > div.form-actions > button')




  //Apply page3
  fillPage5(browser)

  browser
  .pause(5000)
  .end()
}

module.exports = {
  "Demo test Google" : function (browser) {
      loginIn(browser);
  }
};
