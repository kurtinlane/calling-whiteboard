'use strict';

var components = angular.module('callingWhiteboard.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('callingWhiteboard', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'callingWhiteboard.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'xeditable'
]);
angular.componentFactory.moduleDecorator(app);