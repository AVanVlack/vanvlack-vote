'use strict';

angular.module('workspaceApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [];

    $http.get('/api/polls/' + $routeParams.pollID).success(function(pollData) {
      $scope.pollData = pollData;
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
    
    $scope.hasUserVoted = function() {
      
    };
  });
