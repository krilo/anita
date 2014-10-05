anitaApp.directive("anitaScroll", [function() {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      var container = element[0]
      var progress = 0;
      var resistance = attr.resistance || 100;
      var time = attr.time || 0.4;
      var speed = attr.speed || 1.0;
    
      document.addEventListener('mousewheel', function(e){

        e.preventDefault();
        var delta = e.wheelDelta/120 || -e.detail/3;
        progress = Math.min(Math.max(progress - delta/resistance, 0), 1)//progress - delta/resistance //Math.min(Math.max(progress - delta/resistance, 0), 1)
      
        updatePos()
      })

      /*
       * Tween Wrapper
       */

      var updatePos = function(){
    
        TweenMax.to(container, time, {
          y: Math.round(((container.offsetHeight*speed) - window.innerHeight)*-progress),
          x: Math.round(-container.offsetWidth/2),
          z: 1,
          ease: Power1.easeOut,
          overwrite: 5
        })
      }

      /*
       * Update Height
       */

      var updateHeight = function(){
        scope.container.height = (scope.layer.items[scope.layer.items.length-1].position.y)
      }

      updateHeight()
      updatePos();
      
    }
  }
}]);