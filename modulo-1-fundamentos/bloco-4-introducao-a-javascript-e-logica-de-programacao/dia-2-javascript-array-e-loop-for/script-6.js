let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpares = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numImpares++;
  }
}

console.log(numImpares);
