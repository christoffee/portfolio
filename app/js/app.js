var myAppModule = angular.module('myApp', []);

var elements = [
      {title: 'About', text: "I am a Web Developer by trade and design and developer games in my spare time. I code mostly in JavaScript (and any framework associated) and have strong skills in front end development. I create games which help me better understand the language of JavaScript. I also have knowledge of data/text mining.", classes: "gridEl content whitebg"},
      {title: '', text: "", classes: "gridEl"},{title: '', text: "", classes: "gridEl"},{title: '', text: "", classes: "gridEl"},
      {title: 'Stella Stellam', text: "A dark story of discovery.", classes: "gridEl content greenbg"},
      {title: 'Escape the Solar System', text: "An adventure statergy game.", classes: "gridEl whitebg"},
      {title: 'Inner Solar System animate', text: "An animation of the inner solar system using HTML5.", classes: "gridEl double lgreenbg"}
    ];

myAppModule.controller('gridController', function  ($scope) {
  $scope.elements = elements;
  $scope.elTextHide = true;

  $scope.displayEl = function () {
    this.elTextHide = !this.elTextHide;
  }

  $scope.appliedClasses = function (el) {
  	return el.classes;
  }
});