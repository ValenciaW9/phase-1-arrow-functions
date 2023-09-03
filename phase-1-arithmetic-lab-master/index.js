// Instructions Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62. Create a variable called random that will generate a random integer greater than 0. Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
//Create a variable called max that finds the highest number in a set; the value returned should be 20.. can you help? so far i have this.multiply = num 1 * num2 random = Math.floor(math.random) * 100) + 1; mod = num3 % num4 Math.max()
//Step 1: Create a variable called multiply that multiplies num1 and num2 to get a result of 62.
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;
console.log(multiply); // Output: 62

let random = Math.floor(Math.random() * 100) + 1;
console.log(random); // Output: random number between 1 and 100

let num3 = 14;
let num4 = 5;
let mod = num3 % num4;
console.log(mod); // Output: 4

let max = Math.max(10, 20, 5);
console.log(max); // Output: 20