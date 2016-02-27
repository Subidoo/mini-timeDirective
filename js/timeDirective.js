app.directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> Hello {{name}}, the current time is {{time}} </div>',
    scope: {
    	name: '=pName'
    },
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
});