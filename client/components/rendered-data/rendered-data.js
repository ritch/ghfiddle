angular.module('ghaRenderedData', [])
  .directive('ghaRenderedData', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/rendered-data/rendered-data.html',
      controller: 'RenderedDataController'
    };
  })
  .controller('RenderedDataController', ['$scope', '$compile', '$sce',  'templateDataService', function($scope, $compile, $sce, templateDataService) {
    $scope.data = templateDataService._data;

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
