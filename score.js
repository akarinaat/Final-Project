'use strict';

score = [
  { name: 'Player-1', score: 0 },
  { name: 'Player-2', score: 0 },
  { name: 'Player-3', score: 0 },
  { name: 'Player-4', score: 0 },
  { name: 'Player-5', score: 0 },
];

function updateLeaderboardView() {
  var leaderboard = document.getElementById( 'leaderboard' );
  leaderboard.innerHTML = '';

  score.sort( function ( a, b ) { } );
  var elements = []; // we'll need created elements to update colors later on
  // create elements for each player
  for ( var i = 0; i < score.length; i++ ) {
    var name = document.createElementClass( 'div' );
    var score = document.createElementClass( 'div' );

  }

  var colors = [ 'gold', 'silver', '#cd7f32' ];
  for ( i = 0; i < 3; i++ ) {
    elements[ i ].style.color = colors[ i ];
  }
}


// Work 

function randomize() {
  for ( var i = 0; i < score.length; i++ ) {
    score[ i ].score = Math.floor( Math.random() * score );
  }
  // when your data changes, call updateLeaderboardView
  updateLeaderboardView();
}
randomize();