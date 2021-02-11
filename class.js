/* eslint-disable no-console */
/* eslint-disable strict */
// function findMovies(time,movieLengths){
//   if(movieLengths.length < 2) {
//     return false;
//   }
//   for(let i=0;i<movieLengths.length;i++){
//     const movieLengthA = movieLengths[i];
//     for(let j = i+1; j< movieLengths.length;j++){
//       const movieLengthB = movieLengths[j];
//       if(movieLengthA + movieLengthB === time) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
function findMovies(time,movieLengths){
  if(movieLengths.length < 2){
    return false;
  }
  const timeRemaining = {};
  for(let i=0; i<movieLengths.length; i++){
    const movieLengthA = movieLengths[i];
    timeRemaining[time - movieLengthA] = i;
  }
  for (let i=0; i<movieLengths.length;i++){
    const movieLengthB = movieLengths[i];
    if(movieLengthB in timeRemaining && timeRemaining[movieLengthB] !== i){
      return true;
    }
  }
  return false;
}


console.log(findMovies(180,[60,210,90,120])); // true
console.log(findMovies(190, [60, 210, 90, 120])); // false
console.log(findMovies(180, [210, 90, 120])); // false
console.log(findMovies(180, [ 210, 90, 120,90])); // true
console.log(findMovies(180, [180, 90, 120])); // true