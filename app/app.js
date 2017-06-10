'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.version',
    'ui.router',
    'dndLists'
]).config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $locationProvider.hashPrefix('!');

    $stateProvider
    //INDEX
        .state('home', {
        url: '/home',
        templateUrl: '/home/home.html',
        controller: 'HomeController'
    })

    $urlRouterProvider.otherwise('/home');


}]);