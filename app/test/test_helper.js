const jsdom = require("jsdom/lib/old-api.js").jsdom;
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';


//set up test env to run like a browser
const doc = jsdom('<!doctype html><html><body></body></html>');
const window = doc.defaultView;
//override jquery's '$' setting it to our mocked window
const $ = _$(window);

global.document = doc;
global.window = window;

//build rendercomponent
function renderComponent(ComponentClass){
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

  return $(ReactDOM.findDOMNode(componentInstance));
}

//build helper for simulating evets
$.fn.simulate = function(eventName, value){
  if (value){
    this.val(value);
  }
  this.ReactTestUtils.Simulate[eventName](this[0]);
};

//set up chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect };