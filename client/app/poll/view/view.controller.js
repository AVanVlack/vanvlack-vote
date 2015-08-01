'use strict';

angular.module('workspaceApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams, User, Auth, $location) {

    if(Auth.isLoggedIn()){
      $scope.currentUser = Auth.getCurrentUser();
      $scope.hasVoted = $scope.currentUser.votedPolls.indexOf($routeParams.pollID) !== -1;
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }

    $scope.linkToPoll = "http://" + $location.$$host + $location.$$path

    $http.get('/api/polls/' + $routeParams.pollID).success(function(pollData) {
      $scope.pollData = pollData;
      $scope.buildChart();
    });

    $scope.buildChart = function(){
      $scope.chartData = _.zip($scope.pollData.responses, $scope.pollData.votes)
      var chart = c3.generate({
        data: {
          bind: "#chart",
          columns: $scope.chartData,
          type : 'pie',
        }
      });
    }

    $scope.voteSubmit =  function(){
      var body = {};
      body.vote = $scope.myVote
      $http.put('/api/polls/vote/' + $routeParams.pollID, body).success(function(res){
        $scope.pollData = res;
        $scope.hasVoted = true;
        $scope.buildChart();
      });
    }
  });
