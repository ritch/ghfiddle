describe('githubApi', function() {
  beforeEach(module('ghaGitHubApi'))

  describe('Issue', function() {
    it('should create an Issue object', inject(function(Issue) {
      expect(typeof Issue(1)).toBe('object');
    }));
  });
});
