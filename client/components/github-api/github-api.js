angular.module('ghaGitHubApi', [])
  .factory('Issue', function() {
    function Issue(issueNum) {
      this.number = issueNum;
    }

    return function(issueNum) {
      return new Issue(issueNum);
    };
  });
