angular
  .module('ghApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: function($rootScope) {
          $rootScope.title = 'Home';
        },
        templateUrl: '/home/home.html'
      });
  })
  .controller('HomeController', [
    '$scope',
    function($scope) {
      $scope.working = 'yes';
    }
  ]);
