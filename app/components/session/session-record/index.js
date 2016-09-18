import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SessionRecordComponent from './session-record.component';

const sessionRecord = angular
    .module('session.record', [
        uiRouter
    ])
    .component('sessionRecord', SessionRecordComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('record', {
                url: '/record',
                component: 'sessionRecord',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default sessionRecord;
