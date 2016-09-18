import SessionListComponent from './session-list.component';

const sessionList = angular
  .module('session.list', [])
  .component('sessionList', SessionListComponent)
  .name;

export default sessionList;
