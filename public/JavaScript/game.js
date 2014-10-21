var game = new RockPaperScissors();
var player = new Player();
var enemy = new Enemy();

$(document).ready(function () {
		var timer;
		$('img').on('click', function() { 
			clearTimeout(timer);
			var playerChoice = $(this).data('gesture');
			$('h3').text(game.decideWinnerOf(player.choiceToFunction(playerChoice), enemy.getEnemyChoice()));
			$('h3').addClass('result');
			timer = setTimeout(function() {
				$('h3').fadeOut(function() {
					$(this).text("Why don't you play a game against our resident mouse!").fadeIn().removeClass('result');
				});
			}, 4000);
		});

		$('img').load(function () {
		$(this).data('height', this.height);
		}).bind('mouseenter mouseleave', function(enlarge) {
		$(this).stop().animate({
			height: $(this).data('height') * (enlarge.type === 'mouseenter' ? 1.5 :  1)
		});
		}); 

});


// setTimeout(function() {
// 			location.reload()
// 		}, 4000);