anitaApp.directive("anitaScroll", [function() {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      var container = element[0]
      var progress = 0;
      var resistance = attr.resistance || 100;
      var time = attr.time || 0.4;
    
      document.addEventListener('mousewheel', function(e){

        e.preventDefault();
        var delta = e.wheelDelta/120 || -e.detail/3;
        progress = Math.min(Math.max(progress - delta/resistance, 0), 1)
      
        updatePos()
      })

      var updatePos = function(){

        /*
         * Tween Wrapper
         */
    
        TweenMax.to(container, time, {
          y: Math.round((container.offsetHeight - window.innerHeight)*-progress),
          x: Math.round(-container.offsetWidth/2),
          ease: Power1.easeOut,
          overwrite: 5
        })
      }

      updatePos();
      
    }
  }
}]);