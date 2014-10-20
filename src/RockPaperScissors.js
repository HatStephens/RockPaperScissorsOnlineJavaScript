function RockPaperScissors() {};

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




// else if (gestureOne.type === "Rock") 
// 			return gestureOne.type;
// 	else 
// 		return gestureTwo.type;