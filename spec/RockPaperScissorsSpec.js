describe('RockPaperScissors', function() {

	beforeEach(function () {
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors		
	});


	describe('gestures', function() {

		it('rock should be a rock', function() {
			expect(rock.type).toEqual("Rock")
		});

		it('paper should be a paper', function() {
			expect(paper.type).toEqual("Paper")
		});

		it('Scissors should be scissors', function() {
			expect(scissors.type).toEqual("Scissors")
		});

	});

	describe('rules of the game', function () {
			
			beforeEach(function() {
				game = new RockPaperScissors
			});

		it('rock beats scissors', function() {
			expect(game.decideWinnerOf(rock, scissors)).toEqual("Rock")
		});

		it('scissors gets beaten by rock', function() {
			expect(game.decideWinnerOf(scissors, rock)).toEqual("Rock")
		});

		it('rock draws with rock', function() {
			expect(game.decideWinnerOf(rock, rock)).toEqual("Draw")
		});

		it('scissors draws with scissors', function() {
			expect(game.decideWinnerOf(scissors, scissors)).toEqual("Draw")
		});

		it('Scissors beats paper', function() {
			expect(game.decideWinnerOf(scissors, paper)).toEqual("Scissors")
		});

		it('Paper gets beaten by scissors', function() {
			expect(game.decideWinnerOf(paper, scissors)).toEqual("Scissors")
		});

		it('paper draws with paper', function() {
			expect(game.decideWinnerOf(paper, paper)).toEqual("Draw")
		});

		it('Paper beats rock', function() {
			expect(game.decideWinnerOf(paper, rock)).toEqual("Paper")
		});

		it('Rock gets beaten by paper', function() {
			expect(game.decideWinnerOf(rock, paper)).toEqual("Paper")
		});

	});

});

describe('Player', function() {

	beforeEach(function() {
		player = new Player;
	});

	it('should generate a new instance of a Rock when "Rock" is passed to it', function() {
			player.choiceToFunction("Rock");
		  expect(player.choice.type).toEqual("Rock");
	});

	it('should generate a new instance of a Paper when "Paper" is passed to it', function() {
			player.choiceToFunction("Paper");
		  expect(player.choice.type).toEqual("Paper");
	});

	it('should generate a new instance of a Scissors when "Scissors" is passed to it', function() {
			player.choiceToFunction("Scissors");
		  expect(player.choice.type).toEqual("Scissors");
	});

	it('should not generate a new instance of anything when a random string is passed to it', function() {
			player.choiceToFunction("Random");
		  expect(player.choice).toBe(null);
	});

});

describe('Enemy', function() {

	beforeEach(function() {
		enemy = new Enemy;
	});

	it('should have an array with all three gestures in', function() {
		expect(enemy.gestures.length).toEqual(3);
	});

	it('should be able to pick a gesture at random', function() {
		enemy.getEnemyChoice();
		expect(enemy.chosenGesture).toBeDefined();
	});
});