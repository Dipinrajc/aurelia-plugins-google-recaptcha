'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaRecaptchaConfig = require('./aurelia-recaptcha-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaRecaptchaConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-recaptcha-element');
}