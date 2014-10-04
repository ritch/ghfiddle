describe('dataTemplateEditor', function() {
  beforeEach(module('templates', 'ghaDataTemplateEditor'));

  it('should have a template', inject(function($compile, $rootScope, $templateCache) {

    var linked = $compile('<gha-data-template-editor></gha-data-template-editor>')($rootScope)
    $rootScope.$digest();
    expect(linked.html()).toContain('<ui-codemirror');
  }));
});
