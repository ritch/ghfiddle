angular.module('ghaScript', [])
  .directive('ghaScript', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/script/script.html',
      controller: 'ScriptController'
    };
  })
  .controller('ScriptController', ['$scope', 'templateDataService', function($scope, templateDataService) {

    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'javascript'
    };

    var source = "$scope.foo = 'bar'";
    source += "\nconsole.log('hello');";

    $scope.source = source;

    $scope.$watch('source', function(source) {
      var fn;
      $scope.error = $scope.runtimeError = null;
      try {
        fn = eval('(function(data) { ' + $scope.source + '})');
      } catch(e) {
        return $scope.error = e;
      }

      try {
        templateDataService.clear();
        fn(templateDataService._data);
      } catch(e) {
        $scope.runtimeError = e;
      }
    });
  }]);
