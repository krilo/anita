anitaApp.controller('MainController',
['$scope', '$http', '$rootScope', '$routeParams',
function ($scope, $http, $rootScope, $routeParams) {

  $scope.container = {}
  if($routeParams.mode == "edit"){
    $scope.edit = true
  }

  $http({method: 'GET', url: 'data/anita.json'}).
    success(function(data, status, headers, config) {
      $scope.layers = data.layers;
      $rootScope.$broadcast('landing:data-loaded');
    })

}]);