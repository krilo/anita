anitaApp.controller('MainController',
['$scope', '$http', '$rootScope',
function ($scope, $http, $rootScope) {

  $scope.container = {}

  $http({method: 'GET', url: 'data/anita.json'}).
    success(function(data, status, headers, config) {
      $scope.layers = data.layers;
      $scope.container.height = getParentHeight(data.layers[0].items) 
      $rootScope.$broadcast('landing:data-loaded');
    })

  var getParentHeight = function(elements){
    var value = 0
    for (var i = elements.length - 1; i >= 0; i--) {
      var p = elements[i].position.y + elements[i].size.height
      if(p > value){
        value = p
      }
    };

    return value;
  }

}]);