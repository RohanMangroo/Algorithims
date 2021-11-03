//You are given an array of teams in the from of [homeTeam , awayTeam] and a second array(results) that represents the winners of each compition, in the from of [0, 0, 1]. In this problem the 0 means that the awayTeam wins and 1 means the homeTeam wins. The length of the results is the number of competitions. The winner gets 3 points and the loser gets 0 points.

//Write and algorithm that returns the winner of the tournement

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];
const results = [0, 0, 1];

//In the above example the winners are 'C#', 'Python, and then 'Python' again. The total score would be...
//HTML = 0 C# = 3 Python = 6

//To solve this problem I used an object as memory to keep track of the winners scores and an two variables that will update depending if I encounter a high score.
//I return the team with the higest score
//The main idea here is coresponding idexes across multiple arrays

function tournamentWinner(competitions, results) {
  //Memory
  const result = {};
  //The two vars to be updated
  let tournmentWinner = null;
  let maxScore = 0;

  for (let i = 0; i < results.length; i++) {
    //The competitions array is a 2D array
    //So the current competition coresponds to the i position of the results array.
    const currentCompeition = competitions[i];
    //Holding on to the winner
    const winner =
      results[i] === 0 ? currentCompeition[1] : currentCompeition[0];
    //Checking if winner is in memory
    if (winner in result) result[winner] += 3;
    else result[winner] = 3;
    //Updating my vars
    if (result[winner] > maxScore) {
      maxScore = result[winner];
      tournmentWinner = winner;
    }
  }
  return tournmentWinner;
}

console.log(tournamentWinner(competitions, results));
