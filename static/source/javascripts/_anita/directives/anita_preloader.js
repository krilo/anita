anitaApp.directive("anitaPreloader", ['$rootScope', 'ImagePreloadFactory', function($rootScope, ImagePreloadFactory) {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      scope.assets = []
      scope.progress = 0
      var preloader = ImagePreloadFactory.createInstance()

      /*
       * Wait for initial json load
       */

      scope.$on('landing:data-loaded', function(event) {
        scope.jsonLoaded = true;
        Array.prototype.forEach.call(scope.layers, function(layer, i){
          Array.prototype.forEach.call(layer.items, function(item, i){
            if(item.content.type == "image"){
              preloader.addImage(item.content.src)
            } else if(item.content.type == "video"){
              preloader.addVideo(item.content.src+".mp4")
              preloader.addVideo(item.content.src+".webm")
            }
          })
        });

        preloader.start(onComplete, onProgress);
        
      });

      var onComplete = function(event){
        closePreloader()
      }

      var onProgress = function(p){
        scope.progress = p
      }

      var closePreloader = function(){
        TweenMax.to(element, 0.4, {opacity: 0, delay: 0.2, ease: Quad.easeIn, onComplete: function(){
            element.addClass('hidden')
        }})
      }

    }
  }
}]);