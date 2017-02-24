'use strict';

// Module initialization with injected dependencies for ngRoute, ngAnimate, ui.bootstrap, custom controller, custom service and custom directives

angular.module('statusapp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'statusapp.controllers', 'statusapp.service', 'statusapp.directives'])


.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider

  .when('/app/statuslist', {
    templateUrl: 'templates/statuslist.html',
    controller: 'StatuslistCtrl'
  })

 .otherwise({
     redirectTo: '/app/statuslist'
  });

}]);