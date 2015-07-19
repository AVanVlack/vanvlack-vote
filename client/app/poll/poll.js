'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/builder', {
        templateUrl: 'app/poll/builder/create.html',
        controller: 'createCtrl',
        authenticate: true
      })
      .when('/search', {
        templateUrl: 'app/poll/search/search.html',
        controller: 'searchCtrl'
      })
      .when('/user', {
        templateUrl: 'app/poll/user/view.html',
        controller: 'viewCtrl',
        authenticate: true
      });
  });