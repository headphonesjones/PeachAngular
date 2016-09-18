import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SessionScheduleComponent from './session-schedule.component';

const sessionRecord = angular
    .module('session.schedule', [
        uiRouter
    ])
    .component('sessionSchedule', SessionScheduleComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('schedule', {
                url: '/schedule',
                component: 'sessionSchedule',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default sessionRecord;
