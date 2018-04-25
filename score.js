'use strict';

var score = 0;
var highscore = 0;
leaderBoardScores = [];



function LeaderboardView(score, name) {
  this.score = score;
  this.name = name;
  leaderBoardScores.push(this);

  new leaderBoardScores//I was thinking if there was some logic to 'push' local storage to the empty array
  //stretch goal: Manipulate the scores with if condition statements to place player 1 on top.
}

function updateLeaderboardView() {
  var leaderboard = document.getElementsByClassName('leaderboard');

  for (var i = 0; i < leaderBoardScores.length; i++) {
    var name = document.getElementsByClassName('top3');
    var score = document.getElementsByClassName('topScore');

  }
    if (score > localStorage.getItem('highscore')) {
      localStorage.setItem('highscore', score);
    }

    var currentScore = 0;
    var highscore = localStorage.getItem('highscore');

    if (highscore !== null) {
      if (currentScore > highscore) {
        localStorage.setItem('highscore', score);
      }
    }
    else {
      localStorage.setItem('highscore', score);
    }
  }




  // work in progress
  //snippet of code that involves color scheme to first 3 players.
  //first place gets gold, second place gets silver, third place gets bronze.
  var colors = ['gold', 'silver', '#cd7f32'];
  for (i = 0; i < 3; i++) {
    elements[i].style.color = colors[i];
  }
}
