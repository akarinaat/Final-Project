'use strict';

var boxOne = document.getElementById( 'div1' );
var boxTwo = document.getElementById( 'div2' );
var boxThree = document.getElementById( 'div3' );
var boxFour = document.getElementById( 'div4' );
var boxMain = document.getElementById( 'divMain' );
var getSpan = document.getElementById( 'wordcolors' );

var tempColor;
var playerScore = 0;
var tempTextValue;
var progressBar;

var previousValue = [ boxMain.style.background, boxMain.textContent ];
function getRandomValue() {
  var colorWord = [ [ 'blue', '1' ], [ 'red', '2' ], [ 'yellow', '3' ], [ 'green', '4' ], [ 'purple', '5' ], ];
  do {
    var currentValue = colorWord[ Math.floor( Math.random() * colorWord.length ) ];
    var chooseValue = currentValue[ Math.round( Math.random() ) ];

  }
  while ( currentValue === previousValue );
  previousValue = currentValue;
  return chooseValue;
}

var previousStart;
function getRandomStart() {
  var colorStart = [ 'yellow', 'blue', 'green', 'red' ];
  do {
    var currentStart = colorStart[ Math.floor( Math.random() * colorStart.length ) ];
  }
  while ( previousStart === currentStart || previousValue === currentStart );

  previousStart = currentStart;
  return currentStart;
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
    getSpan.textContent = getRandomStart();
  }
}

function handleClick( event ) {
  switch ( event.target.id ) {
  // Functionality for 'boxOne' element.
  case 'div1':
    if ( getSpan.textContent.toLowerCase() !== boxOne.style.background.toLowerCase() &&
      getSpan.textContent !== boxOne.textContent ) {
      alert( 'Nice try!' );
    }
    getSpan.textContent = getRandomValue();
    setBackgroundColor1();
    setTextValue1();

    if ( progressBar ) {
      clearInterval( progressBar );
    }
    progressBar = timer();
    playerScore++;
    break;
  // Functionality for 'boxTwo' element.
  case 'div2':
    if ( getSpan.textContent.toLowerCase() !== boxTwo.style.background.toLowerCase() &&
      getSpan.textContent !== boxTwo.textContent ) {
      console.log( getSpan.textContent );
      console.log( boxTwo.style.background );
      alert( 'Nice try!' );
    }
    getSpan.textContent = getRandomValue();
    setBackgroundColor2();
    setTextValue2();

    if ( progressBar ) {
      clearInterval( progressBar );
    }
    progressBar = timer();
    playerScore++;
    break;
  // Functionality for 'boxThree' element.
  case 'div3':
    if ( getSpan.textContent.toLowerCase() !== boxThree.style.background.toLowerCase() &&
      getSpan.textContent !== boxThree.textContent ) {
      alert( 'Nice try!' );
    }
    getSpan.textContent = getRandomValue();
    setBackgroundColor3();
    setTextValue3();

    if ( progressBar ) {
      clearInterval( progressBar );
    }
    progressBar = timer();
    playerScore++;
    break;
  // Functionality for 'boxFour' element.
  case 'div4':
    if ( getSpan.textContent.toLowerCase() !== boxFour.style.background.toLowerCase() &&
      getSpan.textContent !== boxFour.textContent ) {
      alert( 'Nice try!' );
    }
    getSpan.textContent = getRandomValue();
    setBackgroundColor4();
    setTextValue4();

    if ( progressBar ) {
      clearInterval( progressBar );
    }
    progressBar = timer();
    playerScore++;
    break;
  }
  getScore.textContent = playerScore;
}

var getScore = document.getElementById( 'player-score' );
var startGame = document.getElementById( 'start' );

startGame.addEventListener( 'click', handleStart );
boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick );

// Progress bar/timer functionality.
function timer() {
  var elem = document.getElementById( 'myBar' );
  var width = 20;
  var id = setInterval( frame, 20 );
  function frame() {
    if ( width >= 100 ) {
      alert( 'Game Over!' );
      clearInterval( id );

    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML;
    }
  }
  return id;
}

