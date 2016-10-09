'use strict'

const inputString = `Lions 3, Snakes 3\nTarantulas 1, Aardvarks 0\nLions 1, Aardvarks 1\nTarantulas 3, Snakes 1\nLions 4, Grouches 0`

// TODO: turn the input string into an array of game objects that look like
// {
//   teamA: 'Lions',
//   scoreA: 3,
//   teamB: 'Grouches',
//   scoreB: 3
// }
// hint: string.split() returns an array of strings

const parseGames = function(input) {
  return input
    //split on \n  <- game strings like 'Lions 3, Snakes 3'
    .split('\n')
    //split on ,
    .map(function(game) {
      return game.split(', ')
    })
    .map(function(teamArr) {
      const teamA = teamArr[0].split(' ')
      const teamB = teamArr[1].split(' ')
      return gameObj(teamA[0], teamA[1], teamB[0], teamB[1])
    })

    //split on space
    //make object
}


// once you have broken the string into individual values,
// use a helper function that takes the values from the input string and returns a game object

const gameObj = function(n1, s1, n2, s2) {
  return {
    teamA: n1,
    scoreA: s1,
    teamB: n2,
    scoreB: s2
  }
}

console.log(parseGames(inputString));
