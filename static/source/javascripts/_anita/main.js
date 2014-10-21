var anitaApp = angular.module('anitaApp', ['ngRoute']);

anitaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/:mode?', {
        templateUrl: 'templates/landing.html',
        controller: 'MainController'
      }).
      when('/projects/:id', {
        templateUrl: 'templates/project.html',
        controller: 'ProjectController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);