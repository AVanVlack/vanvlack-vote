'use strict';

angular.module('workspaceApp')
  .controller('userCtrl', function ($scope, $http, Auth) {
    $scope.userPolls = [];
    $scope.user = Auth.getCurrentUser();

    $scope.getUserPolls = function(){
      $http.get('/api/polls/user/' + $scope.user._id).success(function(polls) {
        $scope.userPolls = polls;
      });
    };

    $scope.getUserPolls();

    $scope.deletePoll = function(poll) {
      $http.delete('/api/polls/' + poll._id).success(function(){
        $scope.getUserPolls();
      })
    };
  });
