const arr_numbers = [1, 0, 3, 0, 5, 0, -1, 2,55,3];
let countZeros = 0;
for (let i = 0; i < arr_numbers.length; i++) {
    countZeros += (arr_numbers[i] === 0) ? 1 : 0;
}
console.log("Number of zeros in the array:", countZeros);