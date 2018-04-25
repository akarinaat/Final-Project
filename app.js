'use strict';

var boxOne = document.getElementById('div1');
var boxTwo = document.getElementById('div2');
var boxThree = document.getElementById('div3');
var boxFour = document.getElementById('div4');
var boxMain = document.getElementById('divMain');

var tempColor;
var playerScore = 0;
var tempTextValue;
var progressBar;

var players = [];

fetchPlayers();
// Listen for form submit
document.getElementById('playerForm').addEventListener('submit', savePlayer);

// Save Player
function savePlayer(e){
  // Get form values
  var playerName =document.getElementById('player-name').value;
  //var playerSavedScore =document.getElementById('player-score').value;

  //validation
  if(!validateForm(playerName, playerScore)){
    return false;
  }

  var player = {
    name: playerName,
    score: playerScore,
    //playerSavedScore,
  };

  // checks if players is empty
  if(localStorage.getItem('players')=== null){
    //init array

    //add to array
    players.unshift(player);
    //set to local storage
    localStorage.setItem('players', JSON.stringify(players));
  } else {
    //get players from local storage
    players = JSON.parse(localStorage.getItem('players'));

    //add player to array
    players.unshift(player);



    //re-set back to local storage
    localStorage.setItem('players', JSON.stringify(players));

  }
  // Re-fetch players
  fetchPlayers();

  e.preventDefault();
}

// Fetch players
function fetchPlayers(){
  // Get players from localStorage
  if (localStorage.getItem('players'))
    players = JSON.parse(localStorage.getItem('players'));
  console.log(players);
  // Get output id
  var savedPlayersResults = document.getElementById('savedPlayersResults');

  // Build output clear
  savedPlayersResults.innerHTML = '';

  var limit;
  if (players.length > 5) {
    limit = 5;
  } else {
    limit = players.length;
  }

  for(var i = 0; i < limit; i++){

    //players.length
    var name = players[i].name;
    var score = players[i].score;

    savedPlayersResults.innerHTML += '<p> Players Name: ' + name + '  ,  Score: ' + score + '</p>';

  }

  // reset form
  document.getElementById('playerForm').reset();
  playerScore = 0;
}

// Validate Form
function validateForm(playerName, playerScore){
  if(!playerName || !playerScore){
    alert('Please fill in the Name and start paying');
    return false;
  }

  return true;
}

///end changes on tue

var getSpan = document.getElementById('wordcolors');


function getRandomColor() {
  var previousColor = boxMain.style.background;
  var colorWord = ['yellow','blue','green','purple','red'];
  colorWord = colorWord.filter(function(color){
    return color !== previousColor;
  });
  do{
    var currentColor = colorWord[Math.floor(Math.random() * colorWord.length)];
  }
  while(previousColor === currentColor);
  previousColor = currentColor;
  return currentColor;

}
//new
var previousStart;
function getRandomStart() {
  var previousColor = boxMain.style.background;
  var colorStart = [ 'yellow', 'blue', 'green', 'red' ];
  do {
    var currentStart = colorStart[ Math.floor( Math.random() * colorStart.length ) ];
  }
  while ( previousStart === currentStart || previousColor === currentStart );
  previousStart = currentStart;
  return currentStart;
}




getRandomColor();

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

var setTextValue1 = function () {
  tempTextValue = boxMain.textContent;
  boxMain.textContent = boxOne.textContent;
  boxOne.textContent = tempTextValue;
};

var setTextValue2 = function () {
  tempTextValue = boxMain.textContent;
  boxMain.textContent = boxTwo.textContent;
  boxTwo.textContent = tempTextValue;
};

var setTextValue3 = function () {
  tempTextValue = boxMain.textContent;
  boxMain.textContent = boxThree.textContent;
  boxThree.textContent = tempTextValue;
};

var setTextValue4 = function () {
  tempTextValue = boxMain.textContent;
  boxMain.textContent = boxFour.textContent;
  boxFour.textContent = tempTextValue;
};

function handleStart( event ) {
  switch ( event.target.id ) {
  case 'start':
    getSpan.textContent = getRandomStart();
  }
}


function handleClick( event ) {
  switch ( event.target.id ) {
  case 'div1':
    if(getSpan.textContent.toLowerCase() !== boxOne.style.background.toLowerCase()){
      console.log(getSpan.textContent);
      console.log(boxOne.style.background);
      alert('Nice try!');
    }
    setBackgroundColor1();
    setTextValue1();
    getSpan.textContent = getRandomColor();
    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    playerScore++;
    break;


  case 'div2':
    if(getSpan.textContent.toLowerCase() !== boxTwo.style.background.toLowerCase()){
      console.log(getSpan.textContent);
      console.log(boxTwo.style.background);
      alert('Nice try!');
    }
    setBackgroundColor2();
    setTextValue2();
    getSpan.textContent = getRandomColor();
    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    playerScore++;
    break;


  case 'div3':
    if(getSpan.textContent.toLowerCase() !== boxThree.style.background.toLowerCase()){
      console.log(getSpan.textContent);
      console.log(boxThree.style.background);
      alert('Nice try!');
    }
    setBackgroundColor3();
    setTextValue3();
    getSpan.textContent = getRandomColor();
    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    playerScore++;
    break;


  case 'div4':
    if(getSpan.textContent.toLowerCase() !== boxFour.style.background.toLowerCase()){
      console.log(getSpan.textContent);
      console.log(boxFour.style.background);
      alert('Nice try!');
    }
    setBackgroundColor4();
    setTextValue4();
    getSpan.textContent = getRandomColor();
    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    playerScore++;
    break;
  }
  getScore.textContent = playerScore;
}

var getScore = document.getElementById('player-score');
var startGame = document.getElementById('start');


startGame.addEventListener('click', handleStart);
boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick);

//timer

function timer() {
  var elem = document.getElementById('myBar');
  var width = 20;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 100){
      alert('Game Over!');
      clearInterval(id);

    } else {
      width++;
      elem.style.width = width + '%';
      //elem.innerHTML = width * 1  + '%';
      elem.innerHTML = 'YOU WILL FAIL';
    }
  }
  return id;
}





