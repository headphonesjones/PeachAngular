import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AccontComponent from './account.component';

const account = angular
    .module('dashboard', [
        uiRouter,
    ])
    .component('account', AccontComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('account', {
                url: '/account',
                component: 'account',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default account;
