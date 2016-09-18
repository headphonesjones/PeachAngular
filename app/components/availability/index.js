import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AvailabilityComponent from './availability.component';

const availability = angular
    .module('availability', [
        uiRouter,
    ])
    .component('availability', AvailabilityComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('availability', {
                url: '/availability',
                component: 'availability',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default availability;
