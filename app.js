'use strict';

var boxOne = document.getElementById('div1');
var boxTwo = document.getElementById('div2');
var boxThree = document.getElementById('div3');
var boxFour = document.getElementById('div4');
var boxMain = document.getElementById('divMain');

var tempColor;

var setBackgroundColor1 = function () {
  tempColor = boxMain.style.background;
  boxMain.style.background = boxOne.style.background;
  boxOne.style.background = tempColor;
};

var setBackgroundColor2 = function () {
  tempColor = boxMain.style.background;
  boxMain.style.background = boxTwo.style.background;
  boxTwo.style.background = tempColor;
};

var setBackgroundColor3 = function () {
  tempColor = boxMain.style.background;
  boxMain.style.background = boxThree.style.background;
  boxThree.style.background = tempColor;
};

var setBackgroundColor4 = function () {
  tempColor = boxMain.style.background;
  boxMain.style.background = boxFour.style.background;
  boxFour.style.background = tempColor;
};

function handleClick(event) {
  switch (event.target.id) {
    case 'div1':
      setBackgroundColor1();
      break;
    case 'div2':
      setBackgroundColor2();
      break;
    case 'div3':
      setBackgroundColor3();
      break;
    case 'div4':
      setBackgroundColor4();
      break;
  }
}

boxOne.addEventListener('click', handleClick);
boxTwo.addEventListener('click', handleClick);
boxThree.addEventListener('click', handleClick);
boxFour.addEventListener('click', handleClick);












































//addition of results page code. -KH
// var scores = [
//   { name: 'Player-1', score:0},
//   { name: 'Player-2', score:0},
//   { name: 'Player-3', score:0},
//   { name: 'Player-4', score:0},
//   { name: 'Player-5', score:0},
// ];

// function updateLeaderboardView() {
//   var leaderboard = document.getElementById('leaderboard');
//   leaderboard.innerHTML = '';

//   scores.sort(function (a, b) { return b.score - a.score });
//   var elements = []; // we'll need created elements to update colors later on
//   // create elements for each player
//   for (var i = 0; i < scores.length; i++) {
//     var name = document.createElementClass('div');
//     var score = document.createElementClass('div');
//     name.classList.add('name');
//     score.classList.add('score');
//     name.innerText = scores[i].name;
//     score.innerText = scores[i].score;

//     var scoreRow = document.createElement('div');
//     scoreRow.classList.add('row');
//     scoreRow.appendChild(name);
//     scoreRow.appendChild(score);
//     leaderboard.appendChild(scoreRow);

//     elements.push(scoreRow);

//   }

//   var colors = ['gold', 'silver', '#cd7f32'];
//   for (var i = 0; i < 3; i++) {
//     elements[i].style.color = colors[i];
//   }
// }


// //still work in progress...
// updateLeaderboardView();
// function randomize() {
//   for (var i = 0; i < scores.length; i++) {
//     scores[i].score = Math.floor(Math.random() * scores);
//   }
//   // when your data changes, call updateLeaderboardView
//   updateLeaderboardView();
// }