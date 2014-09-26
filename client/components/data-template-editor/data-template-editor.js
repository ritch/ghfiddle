angular
  .module('ghaDataTemplateEditor', [])
  .directive('ghaDataTemplateEditor', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/data-template-editor/data-template-editor.html',
      controller: 'DataTemplateEditorController'
    };
  })
  .controller('DataTemplateEditorController', ['$scope', function($scope) {
    $scope.templateSource = '<div><h1>{{data[0].assignee}}</h1></div>';
  }]);
