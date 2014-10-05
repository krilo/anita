anitaApp.controller('MainController',
['$scope', '$http', '$rootScope',
function ($scope, $http, $rootScope) {

  $scope.container = {}

  $http({method: 'GET', url: 'data/anita.json'}).
    success(function(data, status, headers, config) {
      $scope.layers = data.layers;
      $scope.container.height = window.innerHeight * 4
      $rootScope.$broadcast('landing:data-loaded');
    })

}]);