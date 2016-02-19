'use strict';
// RN mock for enzyme
require('react-native-mock/mock');

// react-native/jestSupport/env.js
require('./node_modules/react-native/packager/react-packager/src/Resolver/polyfills/babelHelpers.js');
global.__DEV__ = true;
global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: [],
};

global.Promise = require('promise');
