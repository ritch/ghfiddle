angular.module('ghaRenderedData', [])
  .directive('ghaRenderedData', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/rendered-data/rendered-data.html',
      controller: 'RenderedDataController'
    };
  })
  .controller('RenderedDataController', ['$scope', function($scope) {
    console.log('controller')

    $scope.getType = function (item) {
      if (angular.isArray(item)) return 'array';
      if (angular.isObject(item)) return 'object';
    };

    $scope.data = [{
      number: 1,
      assignee: 'ritch'
    }, {
      number: 2,
      assignee: 'jeffbcross'
    }];
  }]);
