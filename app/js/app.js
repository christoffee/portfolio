var app = angular.module('myApp', []);

var previousElement = null;
app.controller('BlogController', function($scope) {
	$scope.items = [
		{id: 1,title: 'About/Contact',order:0, content:"<p>I am a Web Developer by trade and design and developer games in my spare time. I code mostly in JavaScript (and any framework associated) and have strong skills in front end development. I create games which help me better understand the language of JavaScript. I also have knowledge of data/text mining.</p>", type: 'item active whitebg', unselected: true},
		{id: 2,title: 'Blog:Austrailia',order:0, content:17, type: 'item active', unselected: true},
		{id: 3,title: 'Game:Exploration',order:0, content:'<p>A space stratergy game where the player has to go from planet to planet until they reach pluto. There are several constraints that make the exploration of the solar system challenging and fun.</p><p>This game was built in a MV* structure in HTML5.</p>', type: 'item active game', unselected: true},
		{id: 4,title: 'Project:Text Mining',order:0, content:5, type: 'item active blog', unselected: true},
		{id: 5,title: 'Blog 2',order:0, content:5, type: 'item active', unselected: true},
		{id: 6,title: 'Blog 3',order:0, content:5, type: 'item active', unselected: true},
		{id: 7,title: 'Blog 4',order:0, content:5, type: 'item active', unselected: true},
		{id: 8,title: 'Blog 5',order:0, content:5, type: 'item active', unselected: true},
		{id: 9,title: 'Blog 6',order:0, content:17, type: 'item active', unselected: true},
		{id: 9,title: 'CV',order:0, content:17, type: 'item active whitebg', unselected: true},
		{id: 11,title: 'Blog 7',order:0, content:5, type: 'item active', unselected: true}
	];

	$scope.togglecontent = function (currentElement) {
		if(previousElement !== null){
			for (var i = $scope.items.length - 1; i >= 0; i--) {
				if (previousElement == $scope.items[i].id) {

					$scope.items[i].unselected = true;
					$scope.items[i].type = $scope.items[i].type.replace("expand","item active");
					$scope.items[i].order = 0;
					
					break;
				}		
			};
		}

		for (var i = $scope.items.length - 1; i >= 0; i--) {
			if (currentElement == $scope.items[i].id) {

				$scope.items[i].unselected = false;
				$scope.items[i].type = $scope.items[i].type.replace("item active","expand");
				$scope.items[i].order = 1;

				break;
			}
		};
		
		previousElement = currentElement;
	}

	$scope.minimiseAll = function () {
		for (var i = 0; i < $scope.items.length; i++) {
			$scope.items[i].unselected = true;
			$scope.items[i].type = $scope.items[i].type.replace("expand","item active");
			$scope.items[i].order = 0;
		};
	}
	
});

app.animation('fade', function() {
  return {
    setup : function(element) {
      //prepare the element for animation
      element.css({ 'opacity': 0 });
      var memo = "..."; //this value is passed to the start function
      return memo;
    },
    start : function(element, done, memo) {
      //start the animation
      element.animate({
        'opacity' : 1
      }, function() {
        //call when the animation is complete
        done()
      });
    }
  }
});