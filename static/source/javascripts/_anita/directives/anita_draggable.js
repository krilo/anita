anitaApp.directive("anitaDraggable", [function() {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      var mouseIsDown = false;
      var lastPos = undefined;
      
      element[0].addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mouseIsDown = true;
        return false
      })

      document.addEventListener('mouseup', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mouseIsDown = false;
        return false
      })

      document.addEventListener('mousemove', function(e) {
        e.preventDefault();
        if(mouseIsDown == true){
          
          scope.$apply(function () {
            if(lastPos){
              scope.item.position.x -= lastPos.x - e.x
              scope.item.position.y -= lastPos.y - e.y
            }
            lastPos = {x: e.x, y: e.y}
          });

        }
        return false
      })

    }
  }
}]);