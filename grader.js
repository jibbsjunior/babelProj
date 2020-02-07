function average (score) {
  // add all the numbers in the scores altogether
  let total = 0
  scores.forEach(score => {
    total += score
  })
  // divide by the total number of scores
  let avg = total / scores.length
  // round the number to the nearest decimal point
  return Math.round(avg)
}
console.log("the average scores of in computer science department is");

var scores = [90, 98, 89, 100, 100, 86, 94]
console.log(average(scores)) // should return 94


console.log('the average scores of in science lab tech department is')
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
console.log(average(scores2)) // should return 68
