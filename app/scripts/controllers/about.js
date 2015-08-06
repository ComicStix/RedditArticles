'use strict';

/**
 * @ngdoc function
 * @name redditArticlesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redditArticlesApp
 */
angular.module('redditArticlesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
