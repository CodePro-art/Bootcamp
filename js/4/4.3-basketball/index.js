const numberOfGames = 3;
const sum = [];
const Teams = ["Jon's team","Mike's team","Mary's team"]
const jonTeam = [89,120,103];
const mikeTeam = [116,94,123];
const maryTeam = [97,134,105];

function findWinner() {
  let average = [];
  for (let i = 0; i < arguments.length; i++) {
    
    sum.push(0);
    average.push(0);
    // calculate average of the i-th team
    for (let j = 0; j < arguments[i].length; j++){
      sum[i] += arguments[i][j];
    }
    average[i] = sum[i]/(arguments[i].length);
    console.log(average[i]);
  }

  // find the winning team
  let winningTeamIndex = average.indexOf(Math.max(...average));

  // Check for draw
  for (i = 0; i < arguments.length; i++){
    if ((average[winningTeamIndex] === average[i]) && (winningTeamIndex != i))
        return 'draw';
  }

  // return the winning team index
  return winningTeamIndex;
}

let result = findWinner (jonTeam,mikeTeam,maryTeam);

if (result == 'draw')
  console.log('The result is a draw between at least two teams.')
else if (isNaN(result))
  console.log('Somthing went wrong.')
else
  console.log(`The winning team is ${Teams[result]}, with total of ${sum[result]} points.`);