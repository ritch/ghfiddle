angular.module('ghaRenderedData', [])
  .directive('ghaRenderedData', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/rendered-data/rendered-data.html',
      controller: 'RenderedDataController'
    };
  })
  .controller('RenderedDataController', ['$scope', '$compile', '$sce', function($scope, $compile, $sce) {
    $scope.data = [{
      number: 1,
      assignee: 'ritch'
    }, {
      number: 2,
      assignee: 'jeffbcross'
    }];



    $scope.$watch('templateSource', function(templateSource) {
      if(!templateSource) return;

      templateSource = ['<div>', templateSource, '</div>'].join('');

      var el = $compile(templateSource)($scope);
      el = el[0];
      console.log('el', el);
      if(!el) return;



      $scope.$evalAsync(function() {
        var html = el.innerHTML;
        $scope.renderedHTML = $sce.trustAsHtml(html);
        console.log('$scope.renderedHTML', $scope.renderedHTML.$$unwrapTrustedValue());
      });
    });
  }]);
