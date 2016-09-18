import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SettingsComponent from './settings.component';

const settings = angular
    .module('settings', [
        uiRouter,
    ])
    .component('settings', SettingsComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('settings', {
                url: '/settings',
                component: 'settings',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default settings;
