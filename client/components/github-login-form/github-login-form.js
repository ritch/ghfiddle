angular.module('ghaLoginForm', [])
  .directive('ghaLoginForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/github-login-form/github-login-form.html'
    }
  });
