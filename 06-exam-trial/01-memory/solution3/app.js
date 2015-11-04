/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var templateHiddenLi =  "<li id='liid' class='hidden'><h3>number</h3></li>"; 

var game = {
	expectedNumber : 1,
	clickedNumber: 0,
	clickedCardId: 0,

	startGame : function() {
		var cardsUl = $(".cards").html("");
		for (var i = 0; i < data.length; i++) {
			cardsUl.append(templateHiddenLi.replace("liid", "li"+i).replace("number", data[i]));
			$("#li"+i).click(function(num) {
				return function(){
					game.clickedNumber = data[num];
					game.clickedCardId = num;
					game.play();
				};
			}(i));
		}
	},

	play : function() {
		if (this.expectedNumber == this.clickedNumber) {
			$("#li"+this.clickedCardId).attr('class', 'done');
			this.expectedNumber++;
		} 
		else {
			$(".hidden").attr('class', 'done');
			alert("You Lost!");
		}
		if (this.expectedNumber == data.length) {
			alert("You Won!");
			$(".hidden").attr('class', 'done');
			this.reset();
		}
	},

	reset : function() {
		this.expectedNumber = 1;
	}
}

$(document).ready(function(){
	$(".opt-start").click(function() {
		game.startGame();
	});
  
});







