'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'html/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);
