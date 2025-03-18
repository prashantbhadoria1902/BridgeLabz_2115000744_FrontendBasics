let money = 100, bets = 0, wins = 0;
while (money > 0 && money < 200) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}
console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
