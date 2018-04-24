'use strict';

var boxOne = document.getElementById( 'div1' );
var boxTwo = document.getElementById( 'div2' );
var boxThree = document.getElementById( 'div3' );
var boxFour = document.getElementById( 'div4' );
var boxMain = document.getElementById( 'divMain' );

var tempColor;
var tempTextValue;

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
    break;
  case 'div2':
    setBackgroundColor2();
    setTextValue2();
    break;
  case 'div3':
    setBackgroundColor3();
    setTextValue3();
    break;
  case 'div4':
    setBackgroundColor4();
    setTextValue4();
    break;
  }
}

boxOne.addEventListener( 'click', handleClick );
boxTwo.addEventListener( 'click', handleClick );
boxThree.addEventListener( 'click', handleClick );
boxFour.addEventListener( 'click', handleClick );
