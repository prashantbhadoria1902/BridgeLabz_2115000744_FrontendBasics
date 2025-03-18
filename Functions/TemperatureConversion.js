function convertTemperature(choice, value) {
    switch (choice) {
        case "CtoF":
            if (value >= 0 && value <= 100) return (value * 9/5) + 32;
            break;
        case "FtoC":
            if (value >= 32 && value <= 212) return (value - 32) * 5/9;
            break;
    }
    return "Invalid Input";
}

console.log(convertTemperature("CtoF", 25)); 
console.log(convertTemperature("FtoC", 98));
