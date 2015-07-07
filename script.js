// Code goes here
var app = angular.module('myApp', ['ngAnimate'])
  .filter('niceName', function(){
    return function(input){
      var spaced = input.replace('_',' '),
        capped = spaced.replace( /\b\w/g, function (m) {
          return m.toUpperCase();
        });
      return capped;
    };
  })
  .controller("storyController", function ($scope) {
    var init = function() {
      $scope.name,
        $scope.job_title,
        $scope.tedious_task,
        $scope.celebrity,
        $scope.dirty_task,
        $scope.useless_skill,
        $scope.adjective,
        $scope.obnoxiuous_celebrity,
        $scope.huge_number = "";
      $scope.gender = 'F';
      $scope.genderStrFn();
      $scope.view = 'input';
    };
    $scope.genderStrFn = function(){
      $scope.genderStr1 = $scope.gender === 'F' ? "her":"his";
      $scope.genderStr2 = $scope.gender === 'F' ? "she":"he";
      $scope.genderStr3 = $scope.gender === 'F' ? "her":"him";
    };
    init();

    $scope.buildStory = function(){
      if($scope.inputForm.$valid)$scope.view = 'story';
    };

    $scope.resetStory = function(){
      init();
      $scope.inputForm.$setPristine();
    };
  });