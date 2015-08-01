'use strict';

angular.module('workspaceApp')
  .controller('builderCtrl', function ($scope, $http, Auth) {
    $scope.pollOptions = [{value: ""}, {value: ""}];



    $scope.addPoll = function() {
      if($scope.newThing === '') {
        return;
      }
      var poll = {
        question: $scope.question,
        responses: $scope.pollOptions.map(function(option){
          return option.value;
        }),
        author: Auth.getCurrentUser,
        creationDate: Date.now(),
      };
      $http.post('/api/polls', poll);
      //redirect to new poll's view
    };

    $scope.addOption = function(){
      $scope.pollOptions.push({value: ""})
    }

    $scope.removeOption = function(index){
      $scope.pollOptions.splice(index, 1);
    }

  });
