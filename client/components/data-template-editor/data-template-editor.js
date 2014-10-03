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
    $scope.templateSource = '<h1>{{data.message}}</h1>';
    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'htmlembeded'
    };
  }]);
