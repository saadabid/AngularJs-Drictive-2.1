







var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


  $scope.snippet =
    'Pretty text with some links:\n' +
    'http://angularjs.org/,\n' +
    'mailto:us@somewhere.org,\n' +
    'another@somewhere.org,\n' +
    'and one more: ftp://127.0.0.1/.';
  $scope.snippetWithSingleURL = 'http://angularjs.org/';
 



});