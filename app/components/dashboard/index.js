import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DashboardComponent from './dashboard.component';
import SessionList from '../session/session-list';

const dashboard = angular
    .module('dashboard', [
        uiRouter,
        SessionList
    ])
    .component('dashboard', DashboardComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('dashboard', {
                url: '/',
                component: 'dashboard',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default dashboard;
