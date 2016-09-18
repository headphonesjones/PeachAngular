import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StatsComponent from './stats.component';

const stats = angular
    .module('stats', [
        uiRouter,
    ])
    .component('stats', StatsComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('stats', {
                url: '/stats',
                component: 'stats',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default stats;
