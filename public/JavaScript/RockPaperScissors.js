function RockPaperScissors() {
	this.playerWin = false;
};

function Player() {
	this.choice = null;
};

function Enemy() {
	this.gestures = [new Rock, new Paper, new Scissors];
	this.chosenGesture = null;
};

function Rock() {
	this.type = "Rock";
	this.beats = "Scissors";
};

function Paper() {
	this.type = "Paper";
	this.beats = "Rock";
};

function Scissors() {
	this.type = "Scissors";
	this.beats = "Paper";
};

RockPaperScissors.prototype.decideWinnerOf = function(gestureOne, gestureTwo) {
	if(gestureOne.type === gestureTwo.type)	{
		this.playerWin = false;
		return this.winningMessage("Draw");
	}
	else if (gestureOne.beats === gestureTwo.type){
		this.playerWin = true;
		return this.winningMessage(gestureOne.type, "Player");
	}
	else {
		this.playerWin = false;	
		return this.winningMessage(gestureTwo.type, "Enemy");
	}
};

RockPaperScissors.prototype.winningMessage = function(result, winner) {
	if(result === "Draw") return "Wow! You both chose the same gesture. It's a draw!"
	if(result === "Rock" && winner === "Player") return "Well done! Your Rock broke the pair of Scissors. You Win!";
	if(result ===	"Paper" && winner === "Player") return "Brilliant! Your piece of Paper covered the Rock. You Win!";
	if(result === "Scissors" && winner === "Player") return "Fantastic! Your Scissors cut up the piece of Paper. You Win!";
	if(result === "Rock" && winner === "Enemy") return "Unlucky! The Rock broke your pair of Scissors. You Lose!";
	if(result ===	"Paper" && winner === "Enemy") return "Oh no! The piece of Paper covered your Rock. You Lose!";
	if(result === "Scissors" && winner === "Enemy") return "Ooops! The Scissors cut up your piece of Paper. You Lose!";
};

Player.prototype.choiceToFunction = function(gesture) {
	if(gesture === "Rock") return this.choice = new Rock();
	if(gesture === "Paper") return this.choice = new Paper();
	if(gesture === "Scissors") return this.choice = new Scissors();
};

Enemy.prototype.getEnemyChoice = function() {
	this.chosenGesture = this.gestures[Math.floor(Math.random() * this.gestures.length)]
	return this.chosenGesture;
}


