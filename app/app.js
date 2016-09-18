// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
let mdDataTable = require('angular-material-data-table');

require('./sass/app.scss');
// App
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = angular
    .module('app', [
        Components,
        Common,
        uiRouter,
        ngMaterial,
        mdDataTable
    ])
    .component('app', AppComponent)
    // .config(function($locationProvider) {
    //     $locationProvider.html5Mode(true);
    // })
    .name;



export default app;
