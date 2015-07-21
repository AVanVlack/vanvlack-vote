'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/builder', {
        templateUrl: 'app/poll/builder/builder.html',
        controller: 'builderCtrl',
        authenticate: true
      })
      .when('/search', {
        templateUrl: 'app/poll/search/search.html',
        controller: 'searchCtrl'
      })
      .when('/user', {
        templateUrl: 'app/poll/user/user.html',
        controller: 'userCtrl',
        authenticate: true
      })
      .when('/view/:pollID', {
        templateUrl: 'app/poll/view/view.html',
        controller: 'ViewCtrl',
        authenticate: false
      });
  });