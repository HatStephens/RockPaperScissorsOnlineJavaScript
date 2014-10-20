

$('img').on('click', function() { 
	var game = new RockPaperScissors;
	var playerChoice = $(this).data('gesture');
	$('h3').text(game.decideWinnerOf(playerChoice, new Scissors));
});

$('img').load(function () {
	$(this).data('height', this.height);
}).bind('mouseenter mouseleave', function(enlarge) {
	$(this).stop().animate({
		height: $(this).data('height') * (enlarge.type === 'mouseenter' ? 1.5 :  1)
	});
});

