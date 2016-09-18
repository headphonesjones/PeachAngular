import angular from 'angular';
import Session from './session';
import Tutor from './tutor';
import Account from './account';
import Dashboard from './dashboard';
import Stats from './stats';
import Settings from './settings';
import Availability from './availability';

const components = angular
    .module('app.components', [
        Dashboard,
        Session,
        Tutor,
        Availability,
        Account,
        Stats,
        Settings,
    ])
    .name;

export default components;
