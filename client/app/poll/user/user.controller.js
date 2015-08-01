'use strict';

angular.module('workspaceApp')
  .controller('userCtrl', function ($scope, $http, Auth) {
    $scope.userPolls = [];
    $scope.user = Auth.getCurrentUser();

    $http.get('/api/polls/user/' + $scope.user._id).success(function(polls) {
      $scope.userPolls = polls;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
