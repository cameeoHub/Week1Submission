/// JavaScript Fundamental Challenges \\\
//
console.log()
console.log()
//
/// Activity 1 - 'Fizz Buzz' Challenge \\\
//
console.log("Activity 1 - 'Fizz Buzz' Challenge")
//
console.log()
//
let num = 15
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz")
} else if (num % 3 == 0) {
    console.log("fizz")
} else if (num % 5 == 0) {
    console.log("buzz")
} else {
    console.log(`${num} has no fizz or buzz`)
}
//
console.log()
console.log()
//
/// Activity 2 - Random between 1-30 - is it divisible by 7? \\\
//
console.log("Activity 2 - Random between 1-30 - is it divisible by 7?")
//
console.log()
//
let randomNumber = [];
for (let i = 0; i < 6; i++) {
    randomNumber.push(Math.ceil(Math.random() * 30));
    if (randomNumber[i] % 7 === 0) {
        console.log(`${randomNumber[i]} is divisible by 7`)
    } else {
        console.log(`${randomNumber[i]} is not divisible by 7`)
    }
    }
//
console.log()
console.log()
//
/// Activity 3 - Six random numbers between 1-50 \\\
//
console.log("Activity 3 - Six random numbers between 1-50")
//
console.log()
//
let randomNumbers = [];
for (let i = 0; i < 6; i++) {
    randomNumbers.push(Math.ceil(Math.random() * 50));
}
//
console.log(randomNumbers)
//
console.log()
console.log()
//
/// Activity 4 - Count back from 9-0 \\\
//
console.log("Activity 4 - Count back from 9-0")
//
console.log()
//
let countBack = 0;
for (let i = 9; i > 0; i--) {
    console.log(i)
}
//
console.log(countBack)
//
console.log()
console.log()
//
/// Activity 5 - Is your pet eating or drinking? \\\
//
console.log("Activity 5 - Is your pet eating or drinking?")
//
console.log()
//
const pet = {
    petName: "Boots",
    typeOfPet: "Cat",
    petAge: 10,
    petColour: "Black",
    eating(){
        return `${this.petName} is eating right now.`
    },
    drinking(){
        return `${this.petName} is drinking right now.`
    }
}
//
console.log(pet.eating())
//
console.log()
console.log()
//
/// Activity 6 - Password \\\
//
console.log("Activity 6 - Password")
//
console.log()
//
let password = "password"
if (password.length < 8) {
    console.log(`Your password is too short.
    It should be at least 8 digits. ${password.length} is too short.`)
} else if (password.length >= 8) {
    console.log(`That is long enough. 
    Your password is ${password.length} digits long.`)
}
    else {
        console.log("Error.")
    }
//
console.log()
console.log()
//
/// Activity 7 - Divisible by 3 or 5 \\\
//
console.log("Activity 7 - Divisible by 3 or 5")
//
console.log()
//
let number = 15
//
if (number % 3 == 0 && number % 5 == 0) {
    console.log(`${number} is divisible by 3 or 5.`)
} else if (number % 3 == 0) {
    console.log(`${number} is only divisible by 3.`)
} else if (number % 5 == 0) {
    console.log(`${number} is only divisible by 5.`)
} else {
    console.log(`${number} is not divisible by either.`)
}
//
//
console.log()
console.log()
