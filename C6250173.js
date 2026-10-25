let age = Number(prompt("Guess the age: "));
let attempts = 1;

while (age !== 30) {
    if (age > 30) {
        console.log("Too old, try again");
    } else {
        console.log("Too young, try again");
    }

    age = Number(prompt("Guess again: "));
    attempts++;
}

console.log("You have guessed it right");
console.log(`Attempted ${attempts} times.`);