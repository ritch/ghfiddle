angular.module('ghaScript', [])
  .directive('ghaScript', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/script/script.html',
      controller: 'ScriptController'
    };
  })
  .controller('ScriptController', ['$scope', function($scope) {

    var source = "$scope.foo = 'bar'";
    source += "\nconsole.log('hello');";

    $scope.source = source;

    $scope.$watch('source', function(source) {
      var fn;

      try {
        fn = eval('(function($scope) { ' + $scope.source + '})');
      } catch(e) {
        return $scope.error = e;
      }

      try {
        fn($scope);
      } catch(e) {
        $scope.runtimeError = e;
      }
    });
  }]);
