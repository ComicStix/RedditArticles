'use strict';

/**
 * @ngdoc overview
 * @name redditArticlesApp
 * @description
 * # redditArticlesApp
 *
 * Main module of the application.
 */
angular
  .module('redditArticlesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $mdThemingProvider.theme('default');


  });
  
