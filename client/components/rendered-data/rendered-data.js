angular.module('ghaRenderedData', [])
  .directive('ghaRenderedData', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/rendered-data/rendered-data.html',
      controller: 'RenderedDataController'
    };
  })
  .controller('RenderedDataController', ['$scope', '$compile', '$sce',  'templateDataService', function($scope, $compile, $sce, templateDataService) {
    var compiledTemplate;
    $scope.data = templateDataService._data;
    $scope.$sce = $sce;

    function applyTemplateToDom () {
      console.log('applyTemplateToDom');
      $scope.$evalAsync(function() {
        $scope.renderedHTML = $sce.trustAsHtml(compiledTemplate($scope).html());
      });
    }

    $scope.$watch('data', applyTemplateToDom, true);

    $scope.$watch('templateSource', function(templateSource) {
      if(!templateSource) return;

      templateSource = ['<div>', templateSource, '</div>'].join('');

      compiledTemplate = $compile(templateSource);
      applyTemplateToDom();
    });
  }]);
