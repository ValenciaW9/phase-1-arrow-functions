  const foo = function() {
    // function body
  };
  
  const sum1 = 1 + 1; // Evaluate the expression 1 + 1, returning 2, and assign it to the variable sum1.
  const difference = 10 - 1; // Evaluate the expression 10 - 1, returning 9, and assign it to the variable difference.
  
  const bar = function() {
    return 'bar';

    };

// Define the divide function
const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  };
  
  // Define the square function
  const square = (x) => {
    return x * x;
  };
  
  // Define the add function
  const add = (x, y) => {
    return x + y;
  };
  
  module.exports = { divide, square, add };
  

   // Evaluate the expression function() { return 'bar'; }, returning a function that can be called, and assign it to the variable bar.
  
  console.log(sum1);
  console.log(difference);
  console.log(bar());
  
  // We've learned that the function expression (the thing to the right of =) is known as an anonymous function. It doesn't have a name associated with it like you see in a function declaration.
  // However, when we assign an anonymous function to a variable, we have a name that points to a callable thing. We can call this anonymous function by invoking foo(). That anonymous function is now, for all practical purposes, named foo.
  // There are subtle differences between function declarations and function expressions, but they are very minute. Neither is really better than the other. Over time, conventions have evolved in the JavaScript programming community for when to use one vs. the other. You will develop a sense for these as you continue to learn JavaScript. Ultimately, however, you are free to use whichever one you prefer.
  
  // Declare a Function Using an Arrow Function
  // The arrow syntax builds on the syntax of the function expression and provides a shorthand way to declare functions that don't require using the function keyword. In fact, in cases where the function body consists of one line of code, we can define it in a single line.
  // Here, we're declaring a variable add and assigning an anonymous function as its value. Let's look to the right of the =:
  // Parameter list ^^^^^
  // Function Body ^^^^^^^
  // This is a very short function body! It adds parameter1 and parameter2.
  // There are a couple of things to be aware of in the code above: first, note that if the function body consists of a single expression, we no longer need to wrap it in curly braces. Second, when there are no braces, arrow functions have an implicit return, i.e., they automatically return the result of the last expression! This is the only situation in which a JavaScript function doesn't require an explicit return with the return keyword.
  // To the left of the =>, you see the parameters that are defined for the function. This looks similar to what we would have done with a function declaration: list the parameters, separated by commas, inside of ().
  // If your arrow function has only one parameter, the () around the parameter becomes optional:
  const twoAdder = x => x + 2; // This is the same as
  // Almost all developers will drop the parentheses in this case. If we need to do more work than return a single expression, we'll need {} to wrap the multiple lines of code, and we'll have to declare a return. That sweet no-return syntax is only available if your function body is one expression long.
  
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  const sum2 = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  };
  
  console.log(sum2(1, 2));
  
  // Describe Situations Where Arrow Functions Are Used
  // Arrow functions are often used in JavaScript's iteration methods. An iterator is a method that allows you to deal with a set of data one at a time. For example, if you had a group of students' essays, you could only grade them one at a time.
  // In addition to looping constructs such as for, JavaScript includes a number of advanced iterators; we'll learn about these later in this section. For now, to see an example of how arrow functions are used in these methods, we'll preview JavaScript's map() method.
  // The .map() method is called on an Array and takes a function as an argument. It iterates through the array, passing each element in turn to the function. It then takes that function's return value and adds it to a new array, leaving the original array unchanged. That new array, containing the modified elements, is returned at the end after all iterations are complete.
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  console.log(squares);
  console.log(nums);
  
  // Note the argument being passed to map above is an arrow function! In each iteration through the nums array, map passes the value of the current element to the arrow function as an argument, and it is assigned to the parameter x. That value is then squared and stored in a new array. After map has iterated through all of the elements, it returns the new array containing the squared values.
  
  // If all this math stuff seems a bit too textbook-y, be reassured that we can iterate through anything, not just numbers. In the following example, we can imagine that overdueTodoItems is a collection of DOM elements:
  const finishedItems = [];
  overdueTodoItems.forEach(item => {
    item.className = "complete";
    finishedItems.push(item);
  });
  console.log(finishedItems);
  
  lapsedUserAccounts.forEach(u => sendBillTo(u.address));
  
  // Or we might use Map in billing software:
  
  