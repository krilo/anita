anitaApp.directive("anitaPreloader", ['$rootScope', function($rootScope) {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      /*
       * Wait for initial json load
       */

      scope.$on('landing:data-loaded', function(event) {
        scope.jsonLoaded = true;
        closePreloader();
      });


      var closePreloader = function(){
        TweenMax.to(element, 0.4, {opacity: 0, delay: 0.2, ease: Quad.easeIn, onComplete: function(){
            element.addClass('hidden')
        }})
      }

    }
  }
}]);