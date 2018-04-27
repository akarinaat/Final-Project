'use strict';

var boxOne = document.getElementById( 'div1' );
var boxTwo = document.getElementById( 'div2' );
var boxThree = document.getElementById( 'div3' );
var boxFour = document.getElementById( 'div4' );
var boxMain = document.getElementById( 'divMain' );
var getSpan = document.getElementById( 'wordcolors' );
var messageStart = document.getElementById( 'message-start' );
var messageEnd = document.getElementById( 'message-end' );
var getScore = document.getElementById( 'player-score' );
var startGame = document.getElementById( 'start' );
var nameForm = document.getElementById( 'playerForm' );

var tempColor;
var playerScore = 0;
var tempTextValue;
var progressBar;

// Get the modal
var modal = document.getElementById( 'myModal' );


// Get the <span> element that closes the modal
var span = document.getElementsByClassName( 'close' )[ 0 ];

// When the user clicks the button, open the modal
function getModal() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

var players = [];
fetchPlayers();
// Listen for form submit.
document.getElementById( 'playerForm' ).addEventListener( 'submit', savePlayer );

// Save new player.
function savePlayer( e ) {
  // e.preventDefault();
  // Get values from form inputs.
  var playerName = document.getElementById( 'player-name' ).value;

  // Run form validation.
  if ( !validateForm( playerName ) ) {
    return false;
  }

  var player = {
    name: playerName,
    score: playerScore,
  };

  // Check for local storage.
  if ( localStorage.getItem( 'players' ) === null ) {
    // Add to new player to array.
    players.unshift( player );
    // Add player to local storage.
    localStorage.setItem( 'players', JSON.stringify( players ) );
  } else {
    // Get array from local storage.
    players = JSON.parse( localStorage.getItem( 'players' ) );

    // Add new player to array.
    players.unshift( player );
    players.sort( ( a, b ) => Number( b.score ) - Number( a.score ) );

    // Save updated array to local storage.
    localStorage.setItem( 'players', JSON.stringify( players ) );
    console.log( e );
    nameForm.style.visibility = 'hidden';
    startGame.addEventListener( 'click', handleStart );
  }
  // Fetch players.
  fetchPlayers();
  e.preventDefault();
}

// Fetch array from local storage.
function fetchPlayers() {
  if ( localStorage.getItem( 'players' ) )
    players = JSON.parse( localStorage.getItem( 'players' ) );

  // Get output ID from HTML.
  var savedPlayersResults = document.getElementById( 'savedPlayersResults' );

  // Clear output field to prepare for rewrite.
  savedPlayersResults.innerHTML = '';

  var limit;
  if ( players.length > 5 ) {
    limit = 5;
  } else {
    limit = players.length;
  }

  for ( var i = 0; i < limit; i++ ) {
    var name = players[ i ].name;
    var score = players[ i ].score;

    savedPlayersResults.innerHTML += '<p> Player: ' + name + '  ,  Score: ' + score + '</p>';
  }

  // Reset the form.
  document.getElementById( 'playerForm' ).reset();
  playerScore = 0;
}

// Validate the form.
function validateForm( playerName ) {
  if ( !playerName ) {
    alert( 'Please enter your name.' );
    return false;
  }
  return true;
}

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

// Randomize display color of span textContent.
function getSpanColor() {
  var colorWord = [ 'yellow', 'blue', 'green', 'purple', 'red' ];
  var currentColor = colorWord[ Math.floor( Math.random() * colorWord.length ) ];
  getSpan.style.color = currentColor;
}

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
  boxOne.textContent = '1';
  boxTwo.textContent = '2';
  boxThree.textContent = '3';
  boxFour.textContent = '4';
  boxMain.textContent = '5';
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
      speedTimer = 65;
      resetBoxes();
      progressBar = timer( 0 );
      startGame.removeEventListener( 'click', handleStart );
      startGame.textContent = 'START';
      displayBar.style.visibility = 'visible';
      boxOne.addEventListener( 'click', handleClick );
      boxTwo.addEventListener( 'click', handleClick );
      boxThree.addEventListener( 'click', handleClick );
      boxFour.addEventListener( 'click', handleClick );
      messageStart.style.display = 'inline-block';
      messageEnd.style.display = 'inline-block';
      getSpan.style.visibility = 'visible';
      getSpanColor();
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
        startGame.addEventListener( 'click', handleStart );
        boxOne.removeEventListener( 'click', handleClick );
        boxTwo.removeEventListener( 'click', handleClick );
        boxThree.removeEventListener( 'click', handleClick );
        boxFour.removeEventListener( 'click', handleClick );
        // Set game to fail state.
        displayBar.style.visibility = 'hidden';
        messageStart.style.display = 'none';
        messageEnd.style.display = 'none';
        progressBar = timer( 100 );
        nameForm.style.visibility = 'visible';
        getSpan.style.visibility = 'hidden';
        startGame.textContent = 'RETRY';
        startGame.removeEventListener( 'click', handleStart );
      } else {
        setBackgroundColor1();
        setTextValue1();
        // Function to randomize textContent span color.
        getSpanColor();
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
        startGame.addEventListener( 'click', handleStart );
        boxOne.removeEventListener( 'click', handleClick );
        boxTwo.removeEventListener( 'click', handleClick );
        boxThree.removeEventListener( 'click', handleClick );
        boxFour.removeEventListener( 'click', handleClick );
        displayBar.style.visibility = 'hidden';
        messageStart.style.display = 'none';
        messageEnd.style.display = 'none';
        progressBar = timer( 100 );
        nameForm.style.visibility = 'visible';
        getSpan.style.visibility = 'hidden';
        startGame.textContent = 'RETRY';
        startGame.removeEventListener( 'click', handleStart );
        getModal();
      } else {
        setBackgroundColor2();
        setTextValue2();
        // Function to randomize textContent span color.
        getSpanColor();
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
        startGame.addEventListener( 'click', handleStart );
        boxOne.removeEventListener( 'click', handleClick );
        boxTwo.removeEventListener( 'click', handleClick );
        boxThree.removeEventListener( 'click', handleClick );
        boxFour.removeEventListener( 'click', handleClick );
        displayBar.style.visibility = 'hidden';
        messageStart.style.display = 'none';
        messageEnd.style.display = 'none';
        progressBar = timer( 100 );
        nameForm.style.visibility = 'visible';
        getSpan.style.visibility = 'hidden';
        startGame.textContent = 'RETRY';
        startGame.removeEventListener( 'click', handleStart );
        getModal();
      } else {
        setBackgroundColor3();
        setTextValue3();
        // Function to randomize textContent span color.
        getSpanColor();
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
        startGame.addEventListener( 'click', handleStart );
        boxOne.removeEventListener( 'click', handleClick );
        boxTwo.removeEventListener( 'click', handleClick );
        boxThree.removeEventListener( 'click', handleClick );
        boxFour.removeEventListener( 'click', handleClick );
        displayBar.style.visibility = 'hidden';
        messageStart.style.display = 'none';
        messageEnd.style.display = 'none';
        progressBar = timer( 100 );
        nameForm.style.visibility = 'visible';
        getSpan.style.visibility = 'hidden';
        startGame.textContent = 'RETRY';
        startGame.removeEventListener( 'click', handleStart );
        getModal();
      } else {
        setBackgroundColor4();
        setTextValue4();
        // Function to randomize textContent span color.
        getSpanColor();
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

startGame.addEventListener( 'click', handleStart );
boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick );

var speedTimer = 65;
var displayBar = document.getElementById( 'myBar' );
function timer( width ) {
  var id = setInterval( frame, speedTimer );
  function frame() {
    if ( width >= 100 ) {
      // Set game to fail state.
      startGame.addEventListener( 'click', handleStart );
      boxOne.removeEventListener( 'click', handleClick );
      boxTwo.removeEventListener( 'click', handleClick );
      boxThree.removeEventListener( 'click', handleClick );
      boxFour.removeEventListener( 'click', handleClick );
      displayBar.style.visibility = 'hidden';
      messageStart.style.display = 'none';
      messageEnd.style.display = 'none';
      nameForm.style.visibility = 'visible';
      getSpan.style.visibility = 'hidden';
      startGame.textContent = 'RETRY';
      startGame.removeEventListener( 'click', handleStart );
      getModal();
      clearInterval( id );

    } else {
      width++;
      displayBar.style.width = width + '%';
    }
  }
  return id;

}



