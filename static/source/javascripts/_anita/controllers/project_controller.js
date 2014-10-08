anitaApp.controller('ProjectController',
['$scope', '$http', '$rootScope', '$routeParams',
function ($scope, $http, $rootScope, $routeParams) {

  $scope.container = {}

  $http({method: 'GET', url: 'data/anita.json'}).
    success(function(data, status, headers, config) {

      for (var i = data.projects.length - 1; i >= 0; i--) {
        if(data.projects[i].id == $routeParams.id){
          $scope.project = data.projects[i]
        }
      };

      $scope.layers = $scope.project.layers;
      $rootScope.$broadcast('landing:data-loaded');
    })

}]);