'use strict';

var boxOne = document.getElementById( 'div1' );
var boxTwo = document.getElementById( 'div2' );
var boxThree = document.getElementById( 'div3' );
var boxFour = document.getElementById( 'div4' );
var boxMain = document.getElementById( 'divMain' );

var tempColor;
var playerScore = 0;
var tempTextValue;
var progressBar;

var players = [];

fetchPlayers();
// Listen for form submit
document.getElementById( 'playerForm' ).addEventListener( 'submit', savePlayer );

// Save Player
function savePlayer( e ) {
  // Get form values
  var playerName = document.getElementById( 'player-name' ).value;

  //validation
  if ( !validateForm( playerName, playerScore ) ) {
    return false;
  }

  var player = {
    name: playerName,
    score: playerScore,
  };

  // checks if players is empty
  if ( localStorage.getItem( 'players' ) === null ) {
    //init array

    //add to array
    players.unshift( player );
    //set to local storage
    localStorage.setItem( 'players', JSON.stringify( players ) );
  } else {
    //get players from local storage
    players = JSON.parse( localStorage.getItem( 'players' ) );

    //add player to array
    players.unshift( player );

    //re-set back to local storage
    localStorage.setItem( 'players', JSON.stringify( players ) );

  }
  // Re-fetch players
  fetchPlayers();
  e.preventDefault();
}

// Fetch players
function fetchPlayers() {
  // Get players from localStorage
  if ( localStorage.getItem( 'players' ) )
    players = JSON.parse( localStorage.getItem( 'players' ) );
  console.log( players );
  // Get output id
  var savedPlayersResults = document.getElementById( 'savedPlayersResults' );

  // Build output clear
  savedPlayersResults.innerHTML = '';

  var limit;
  if ( players.length > 5 ) {
    limit = 5;
  } else {
    limit = players.length;
  }

  for ( var i = 0; i < limit; i++ ) {

    //players.length
    var name = players[ i ].name;
    var score = players[ i ].score;

    savedPlayersResults.innerHTML += '<p> Players Name: ' + name + '  ,  Score: ' + score + '</p>';

  }

  // reset form
  document.getElementById( 'playerForm' ).reset();
  playerScore = 0;
}

// Validate Form
function validateForm( playerName, playerScore ) {
  if ( !playerName || !playerScore ) {
    alert( 'Please fill in the Name and start playing' );
    return false;
  }

  return true;
}
///end changes on tue

var getSpan = document.getElementById( 'wordcolors' );

function getRandomColor() {
  var previousColor = boxMain.style.background;
  var colorWord = [ 'yellow', 'blue', 'green', 'purple', 'red' ];
  colorWord = colorWord.filter( function ( color ) {
    return color !== previousColor;
  } );
  do {
    var currentColor = colorWord[ Math.floor( Math.random() * colorWord.length ) ];
  }
  while ( previousColor === currentColor );
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

function resetBoxes() {
  boxOne.style.background = 'blue';
  boxTwo.style.background = 'red';
  boxThree.style.background = 'yellow';
  boxFour.style.background = 'green';
  boxMain.style.background = 'purple';
}

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
    playerScore = 0;
    getScore.textContent = 0;
    speedTimer = 60;
    resetBoxes();
    boxOne.addEventListener( 'click', handleClick );
    boxTwo.addEventListener( 'click', handleClick );
    boxThree.addEventListener( 'click', handleClick );
    boxFour.addEventListener( 'click', handleClick );
    getSpan.textContent = getRandomStart();
  }
}

function handleClick( event ) {
  switch ( event.target.id ) {
  case 'div1':
    if ( getSpan.textContent.toLowerCase() !== boxOne.style.background.toLowerCase() ) {
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      // Turn off buttons after fail.
      boxOne.removeEventListener( 'click', handleClick );
      boxTwo.removeEventListener( 'click', handleClick );
      boxThree.removeEventListener( 'click', handleClick );
      boxFour.removeEventListener( 'click', handleClick );
      progressBar = timer( 100 );
    } else {
      setBackgroundColor1();
      setTextValue1();
      getSpan.textContent = getRandomColor();
      speedTimer -= 2;
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      progressBar = timer( 20 );
      playerScore++;
    }
    break;

  case 'div2':
    if ( getSpan.textContent.toLowerCase() !== boxTwo.style.background.toLowerCase() ) {
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      // Turn off buttons after fail.
      boxOne.removeEventListener( 'click', handleClick );
      boxTwo.removeEventListener( 'click', handleClick );
      boxThree.removeEventListener( 'click', handleClick );
      boxFour.removeEventListener( 'click', handleClick );
      progressBar = timer( 100 );
    } else {
      setBackgroundColor2();
      setTextValue2();
      getSpan.textContent = getRandomColor();
      speedTimer -= 2;
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      progressBar = timer( 20 );
      playerScore++;
    }
    break;

  case 'div3':
    if ( getSpan.textContent.toLowerCase() !== boxThree.style.background.toLowerCase() ) {
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      // Turn off buttons after fail.
      boxOne.removeEventListener( 'click', handleClick );
      boxTwo.removeEventListener( 'click', handleClick );
      boxThree.removeEventListener( 'click', handleClick );
      boxFour.removeEventListener( 'click', handleClick );
      progressBar = timer( 100 );
    } else {
      setBackgroundColor3();
      setTextValue3();
      getSpan.textContent = getRandomColor();
      speedTimer -= 2;
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      progressBar = timer( 20 );
      playerScore++;
    }
    break;

  case 'div4':
    if ( getSpan.textContent.toLowerCase() !== boxFour.style.background.toLowerCase() ) {
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      // Turn off buttons after fail.
      boxOne.removeEventListener( 'click', handleClick );
      boxTwo.removeEventListener( 'click', handleClick );
      boxThree.removeEventListener( 'click', handleClick );
      boxFour.removeEventListener( 'click', handleClick );
      progressBar = timer( 100 );
    } else {
      setBackgroundColor4();
      setTextValue4();
      getSpan.textContent = getRandomColor();
      speedTimer -= 2;
      if ( progressBar ) {
        clearInterval( progressBar );
      }
      progressBar = timer( 20 );
      playerScore++;
    }
    break;
  }
  // Total score after game is finished.
  getScore.textContent = playerScore;
}

var getScore = document.getElementById( 'player-score' );
var startGame = document.getElementById( 'start' );


startGame.addEventListener( 'click', handleStart );
boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick );

//timer
var speedTimer = 60;

function timer( width ) {
  var elem = document.getElementById( 'myBar' );
  var id = setInterval( frame, speedTimer );
  function frame() {
    if ( width >= 100 ) {
      alert( 'Game Over!' );
      clearInterval( id );

    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
  return id;
}



