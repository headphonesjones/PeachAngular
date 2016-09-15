'use strict';

angular.module('myApp.scheduleDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/schedule-detail', {
            templateUrl: 'schedule_detail/schedule_detail.html',
            controller: 'SchedCtrl'
        });
    }])

    .controller('SchedCtrl', [function($scope) {

    }]);