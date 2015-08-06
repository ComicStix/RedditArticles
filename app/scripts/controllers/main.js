'use strict';

/**
 * @ngdoc function
 * @name redditArticlesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditArticlesApp
 */
angular.module('redditArticlesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
