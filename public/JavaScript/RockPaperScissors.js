function RockPaperScissors() {};

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
	if(gestureOne.type === gestureTwo.type)
		return "Draw";
	else if (gestureOne.beats === gestureTwo.type)
			return gestureOne.type;
	else 
			return gestureTwo.type;
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



