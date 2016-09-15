'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard',
  'myApp.schedule',
  'myApp.scheduleDetail',
  'myApp.version',
  'ngMaterial',
  'md.data.table'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);


angular.module('tabsDemoDynamicHeight', ['ngMaterial']);

angular.module('menuDemoWidth', ['ngMaterial']).config(function($mdIconProvider) {
  $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
});