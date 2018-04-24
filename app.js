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


var getSpan = document.getElementById('wordcolors');



var previousColor = boxMain.style.background;

function getRandomColor() {


  var colorWord = ['Yellow','Blue','Green','Purple','Red'];
  do{
    var currentColor = colorWord[Math.floor(Math.random() * colorWord.length)];
  }
  while(previousColor === currentColor);
  previousColor = currentColor;
  return currentColor;

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


function handleClick( event ) {
  switch ( event.target.id ) {
  case 'div1':
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


boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick);

//timer

function timer() {
  var elem = document.getElementById('myBar');
  var width = 20;
  var id = setInterval(frame, 20);
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
