'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'html/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomneCtrl', [function() {

}]);
