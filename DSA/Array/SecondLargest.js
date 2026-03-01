let arr = [2, 8, 9, 6];
// Output: 8

let largest = -Infinity;
let secondLar = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLar = largest;
    largest = num;
  } else if (num > secondLar && num !== largest) {
    secondLar = num;
  }
}

console.log(secondLar);
