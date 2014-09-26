angular
  .module('ghApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: '/home/home.html'
      });
  })
  .controller('HomeController', [
    '$scope',
    function($scope) {
      $scope.working = 'yes';
      $scope.loggedIn = false;

      $scope.startLogin = function() {
        console.log('starting!!!!!');
      }
    }
  ]);
