let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}
let min = numbers[0], max = numbers[0];
for (let num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
}
console.log("Numbers:", numbers);
console.log("Min:", min);
console.log("Max:", max);
