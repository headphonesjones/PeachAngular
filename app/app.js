'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard',
  'myApp.findTutor',
  'myApp.scheduleTutor',
  'myApp.availability',
  'myApp.tutorOthers',
  'myApp.version',
  'ngMaterial',
  'md.data.table'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashCtrl'
      })
      .when('/find-tutor', {
        templateUrl: '/partials/find_tutor.html',
        controller:  'SchedCtrl'
      })
      .when('/schedule-tutor', {
        templateUrl: '/partials/schedule_tutor.html',
        controller:  'SchedCtrl'
      })
      .when('/availability', {
        templateUrl: '/partials/availability.html',
        controller:  'AvailCtrl'
      })
      .when('/tutor-others', {
          templateUrl: '/partials/tutor_others.html',
          controller:  'TutCtrl'
      })
      .when('/record', {
        templateUrl: '/partials/record.html',
        controller:  'RecordCtrl'
      })
      .when('/history', {
        templateUrl: '/partials/history.html',
        controller:  'HistCtrl'
      })
      .when('/account', {
        templateUrl: '/partials/account.html',
        controller:  'AccountCtrl'
      })
      .when('/settings', {
        templateUrl: '/partials/settings.html',
        controller:  'SettingsCtrl'
      })
      .when('/stats', {
        templateUrl: '/partials/stats.html',
        controller:  'StatsCtrl'
      })
      .otherwise({ redirectTo: '/dashboard' });
}]);


angular.module('tabsDemoDynamicHeight', ['ngMaterial']);

angular.module('menuDemoWidth', ['ngMaterial']).config(function($mdIconProvider) {
  $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
});

angular.module('myApp.findTutor', ['ngRoute']).controller('FindCtrl', [function() {

}]);

angular.module('myApp.scheduleTutor', ['ngRoute']).controller('SchedCtrl', [function($scope) {

}]);

angular.module('myApp.dashboard', ['ngRoute']).controller('DashCtrl', [function() {

}]);

angular.module('myApp.availability', ['ngRoute']).controller('AvailCtrl', [function() {

}]);

angular.module('myApp.tutorOthers', ['ngRoute']).controller('TutCtrl', [function() {

}]);

angular.module('myApp.record', ['ngRoute']).controller('RecordCtrl', [function($scope) {

}]);

angular.module('myApp.history', ['ngRoute']).controller('HistCtrl', [function() {

}]);

angular.module('myApp.account', ['ngRoute']).controller('AccountCtrl', [function() {

}]);

angular.module('myApp.stats', ['ngRoute']).controller('StatsCtrl', [function($scope) {

}]);

angular.module('myApp.dashboard', ['ngRoute']).controller('DashCtrl', [function() {

}]);