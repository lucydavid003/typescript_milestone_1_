//some of two numbers//
function addTwoNumbers(a, b) {
    return a + b;
}
var sum = addTwoNumbers(5, 6);
//converting minutes into seconds//
function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}
//finding perimeter of rectangle//
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}
function isNegative(num) {
    return num < 0;
}
//Can i Drive//
function canDrive(age, name) {
    if (age >= 18) {
        return name + " is old enough to drive.";
    }
    else {
        return name + " is not old enough to drive.";
    }
}
//findLargest number//
function findLargest(number1, number2, number3) {
    var largestNumber;
    if (number1 > number2 && number1 > number3) {
        largestNumber = number1;
    }
    else if (number2 > number1 && number2 > number3) {
        largestNumber = number2;
    }
    else if (number3 > number1 && number3 > number2) {
        largestNumber = number3;
    }
    else {
        largestNumber = "All numbers are equal";
    }
    return largestNumber;
}
//bmi calculator//
function calculateBmi(weight, height) {
    var bmi = weight / (height * height);
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    return "BMI is ".concat(bmi.toFixed(2), " \u2014 ").concat(category);
}
//greeting based on time//
function greetUser(name, time) {
    var greetings;
    if (time >= 5 && time <= 11) {
        greetings = "Good morning";
    }
    else if (time >= 12 && time <= 17) {
        greetings = "Good afternoon";
    }
    else if (time >= 18 && time <= 21) {
        greetings = "Good evening";
    }
    else {
        greetings = "Good night";
    }
    var message = "".concat(greetings, ", ").concat(name, "!");
    return message;
}
//fizzbuzz//
function fizzBuzzCheck(number) {
    var modular3 = number % 3;
    var modular5 = number % 5;
    var buzztyp;
    if (modular3 === 0 && modular5 === 0) {
        buzztyp = "FizzBuzz";
    }
    else if (modular3 === 0) {
        buzztyp = "Fizz";
    }
    else if (modular5 === 0) {
        buzztyp = "Buzz";
    }
    else {
        buzztyp = number;
    }
    return buzztyp;
}
//perimeter 2//
function perimeter2(shape, num) {
    var perimeter;
    if (shape === "c") {
        perimeter = 6.28 * num;
    }
    else {
        perimeter = num * 4;
    }
    return perimeter;
}
//sum of even numbers//
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
//multiply by itself//
function powerUp(num, times) {
    var power = Math.pow(num, times);
    return power;
}
console.log(powerUp(2, 3));
//Factorial calculator//
function factorial(n) {
    var response;
    if (n < 0) {
        response = "Only positive numbers";
    }
    else if (n === 0) {
        response = 1;
    }
    else {
        response = n * factorial(n - 1);
    }
    return response;
}
//mutliple sum//
function multiple(n, divisor) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum += i;
        }
    }
    return sum;
}
//sum of Digits//
function sumDigits(number) {
    var sum = 0;
    while (number !== 0) {
        var digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }
    return sum;
}
