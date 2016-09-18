import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TutorComponent from './tutor.component';

const tutor = angular
    .module('tutor', [
        uiRouter,
    ])
    .component('tutor', TutorComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('tutor', {
                url: '/find-tutor',
                component: 'tutor',
                resolve: {}
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default tutor;
