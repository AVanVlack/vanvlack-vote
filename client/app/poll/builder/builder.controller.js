'use strict';

angular.module('workspaceApp')
  .controller('builderCtrl', function ($scope, $http, Auth, $location) {
    $scope.pollOptions = [{value: ""}, {value: ""}];



    $scope.addPoll = function() {
      console.log(this)
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
      $http.post('/api/polls', poll).success(function(data){
        $location.path('/view/' + data._id)
      });
      //redirect to new poll's view
    };

    $scope.addOption = function(){
      $scope.pollOptions.push({value: ""})
    }

    $scope.removeOption = function(index){
      $scope.pollOptions.splice(index, 1);
    }

  });
