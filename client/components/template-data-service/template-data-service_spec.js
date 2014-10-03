describe('templateDataService', function() {
  var templateDataService;
  beforeEach(function() {
    module('ghaTemplateDataService');
    inject(function(_templateDataService_) {
      templateDataService = _templateDataService_;
    });
  });


  it('should have a data object', function() {
    expect(templateDataService.data).toBeDefined();
  });


  describe('.clear()', function() {
    it('should clear the data object but keep the reference', function() {
      var data = templateDataService.data;
      templateDataService.data.foo = 'bar';
      expect(data.foo).toBe('bar');

      templateDataService.clear();
      expect(data.foo).toBeUndefined();
      expect(templateDataService.data).toBe(data);
    });
  });
});