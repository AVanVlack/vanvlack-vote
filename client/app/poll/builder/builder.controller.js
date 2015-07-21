'use strict';

angular.module('workspaceApp')
  .controller('builderCtrl', function ($scope, $http, Auth) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addPoll = function() {
      if($scope.newThing === '') {
        return;
      }
      var poll = {
        question: $scope.question,
        responses: [$scope.answer1, $scope.answer2],
        author: Auth.getCurrentUser,
        creationDate: Date.now(),
      };
      $http.post('/api/polls', poll);
      //redirect to new poll's view
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
