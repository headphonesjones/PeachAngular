import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SessionHistoryComponent from './session-history.component';
import SessionList from '../session-list';

const session = angular
    .module('session.history', [
        uiRouter,
        SessionList
    ])
    .component('sessionHistory', SessionHistoryComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('session-history', {
                url: '/history',
                component: 'sessionHistory',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default session;
