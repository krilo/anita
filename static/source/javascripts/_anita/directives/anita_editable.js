anitaApp.directive("anitaEditable", [function() {
  return {
    restrict: "A",
    link: function(scope, element, attr) {

      var currentClass = ''
      var draggable = false;

      document.addEventListener('keydown', function(e){
        
        //console.log(e.keyCode)

        // Toggle Layers        
        if(e.keyCode > 48 && e.keyCode < 57){
          var newClass = 'layer-'+(e.keyCode-49)
          element.removeClass(currentClass)
          element.addClass('layer-'+(e.keyCode-49))
          currentClass = newClass
        } else if(e.keyCode == 48){
          element.removeClass(currentClass)
        } else if(e.keyCode == 32){
          e.preventDefault()
          
          var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scope.layers));
          
          var downloadLink = document.querySelector('#download-json')
          downloadLink.classList.add('active')
          downloadLink.setAttribute('href', 'data: '+data)

        } else if(e.keyCode == 90){
          draggable = true;
        } else if(e.keyCode == 88){
          draggable = false;
        }

      })
      
      
    }
  }
}]);