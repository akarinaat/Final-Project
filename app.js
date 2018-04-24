'use strict';

var boxOne = document.getElementById( 'div1' );
var boxTwo = document.getElementById( 'div2' );
var boxThree = document.getElementById( 'div3' );
var boxFour = document.getElementById( 'div4' );
var boxMain = document.getElementById( 'divMain' );

var tempColor;
var score = 0;

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

var progressBar;


function handleClick( event ) {
  switch ( event.target.id ) {
  case 'div1':
    setBackgroundColor1();
    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    break;
  case 'div2':
    setBackgroundColor2();

    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    break;
  case 'div3':
    setBackgroundColor3();

    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    break;
  case 'div4':
    setBackgroundColor4();

    if (progressBar) {
      clearInterval(progressBar);
    }
    progressBar = timer();
    break;
  }
}

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
      elem.innerHTML = 'you still have time!';
    }
  }
  return id;
}
