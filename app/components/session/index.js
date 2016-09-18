import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SessionComponent from './session.component';
import SessionList from './session-list';
import SessionHistory from './session-history';
import SessionRecord from './session-record';
import SessionSchedule from './session-schedule';

const session = angular
    .module('session', [
        uiRouter,
        SessionList,
        SessionHistory,
        SessionRecord,
        SessionSchedule
    ])
    .component('session', SessionComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('session', {
                url: '/session',
                component: 'session',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default session;
