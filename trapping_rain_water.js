// https://leetcode.com/articles/trapping-rain-water/

// var terrain = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];


var terrain = [0, 1, 1, 0, 1, 1, 0, 2, 0, 3, 1, 1, 0];

function detectValleys(terrain) {
  let inValley = false;
  let valleyStart = 0;
  let valleyEnd = 0;
  const valleys = [];

  for (let i = 0; i < terrain.length; i++) {
    if (terrain[i] > terrain[i + 1] && !inValley) {
      inValley = true;
      valleyStart = i;
    }
    else if (
      terrain[i] < terrain[i + 1] &&
      inValley &&
      terrain[i + 2] < terrain[i + 1]
    ) {
      inValley = false;
      valleyEnd = i + 1;
      valleys.push([valleyStart, valleyEnd]);
    }
  }
  return valleys;
}

function calcVolumeInValley(terrain, [startIndex, endIndex]) {
  const [start, end] = [terrain[startIndex], terrain[endIndex]];
  const maxHeight = Math.min(start, end);
  let volume = 0;
//   debugger;
  for (let i = startIndex + 1; i < endIndex; i++) {
    volume += maxHeight - terrain[i];
  }
  return volume;
}

let allVolume = 0

for (const valley of detectValleys(terrain)) {
    allVolume += calcVolumeInValley(terrain, valley)
}

console.log(allVolume)

