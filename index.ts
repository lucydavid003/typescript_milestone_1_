//some of two numbers//
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
const sum = addTwoNumbers(5, 6);

//converting minutes into seconds//
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
//finding perimeter of rectangle//
function calculateRectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

function isNegative(num: number): boolean {
  return num < 0;
}

//Can i Drive//
function canDrive(age: number, name: string): string {
  if (age >= 18) {
    return name + " is old enough to drive.";
  } else {
    return name + " is not old enough to drive.";
  }
}

//findLargest number//
function findLargest(
  number1: number,
  number2: number,
  number3: number
): number | string {
  let largestNumber: number | string;

  if (number1 > number2 && number1 > number3) {
    largestNumber = number1;
  } else if (number2 > number1 && number2 > number3) {
    largestNumber = number2;
  } else if (number3 > number1 && number3 > number2) {
    largestNumber = number3;
  } else {
    largestNumber = "All numbers are equal";
  }

  return largestNumber;
}
//bmi calculator//
function calculateBmi(weight: number, height: number): string {
  const bmi: number = weight / (height * height);
  let category: string;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `BMI is ${bmi.toFixed(2)} — ${category}`;
}

//greeting based on time//
function greetUser(name: string, time: number): string {
  let greetings: string;

  if (time >= 5 && time <= 11) {
    greetings = "Good morning";
  } else if (time >= 12 && time <= 17) {
    greetings = "Good afternoon";
  } else if (time >= 18 && time <= 21) {
    greetings = "Good evening";
  } else {
    greetings = "Good night";
  }

  const message = `${greetings}, ${name}!`;
  return message;
}

//fizzbuzz//
function fizzBuzzCheck(number: number): string | number {
  const modular3 = number % 3;
  const modular5 = number % 5;
  let buzztyp: string | number;

  if (modular3 === 0 && modular5 === 0) {
    buzztyp = "FizzBuzz";
  } else if (modular3 === 0) {
    buzztyp = "Fizz";
  } else if (modular5 === 0) {
    buzztyp = "Buzz";
  } else {
    buzztyp = number;
  }

  return buzztyp;
}
//perimeter 2//
function perimeter2(shape: string, num: number): number {
  let perimeter: number;

  if (shape === "c") {
    perimeter = 6.28 * num;
  } else {
    perimeter = num * 4;
  }

  return perimeter;
}

//sum of even numbers//
function sumEvenNumbers(n: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
//multiply by itself//
function powerUp(num: number, times: number): number {
  const power: number = num ** times;
  return power;
}

console.log(powerUp(2, 3));

//Factorial calculator//
function factorial(n: number): number | string {
  let response: number | string;

  if (n < 0) {
    response = "Only positive numbers";
  } else if (n === 0) {
    response = 1;
  } else {
    response = n * (factorial(n - 1) as number);
  }

  return response;
}

//mutliple sum//
function multiple(n: number, divisor: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }

  return sum;
}

//sum of Digits//
function sumDigits(number: number): number {
  let sum: number = 0;

  while (number !== 0) {
    let digit: number = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
  }

  return sum;
}
//end//
