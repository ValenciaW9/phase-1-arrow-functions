function foo(); {
    return 'bar';
}

const foo = function() {...ActiveXObject}  //=> to the right of the assignment operator (=) is called a function expression.

const sum = 1 + 1

//Ealuate the expression 1+1 , returning 2, and assign it to the variable sum.
const difference = 10 - 1;

//Evaluate the expression 10-1, returning 9, and assign it to the variable difference.
const foo = function(); {
    return 'bar';
}

///Evaluate the expression 10-1 , returning 9, and assign it to the variable difference.
const foo = function(); {
    return 'bar';
}

//Evaluate the expression function() {return 'bar} , returning a thing that can be called , and assign it to the variable foo.
// We've learneed that the function expression (again, the thing to the right of =) is known nas an anonymous function. It doen't have a  name associated with it like you see in a function declaration.
//However when we assign an anonymous function to a variable , we have a  name that points to a callable thing. We can call this anonymous function  by invoking foo(). That anonymous function is now, for all practical purposes, named foo.
//There are subtle diffferences between  function declarations and  function expressions, but they are very minute. Neither  is really better than the other. Pver time, voncentions have evolved in the JavaScript programming comunity for when to use one vs. the other  you will develop a sense for these as you continue to learn Javascript. Ultimately, however, you are free to use whichever one you prefer.


///Declare a Function Using An Arrow Function
//The arrow syntacx builds on the synta of the function expression and provides a shorthand way to declare function that doesnt require using the function keyword. In fact, in cases where the function body  consists of one line off code, we can define it in a single line.
const add = (parameter1, parameter 2) => paramenter 1 + parameter 2; add(2,3);//=> 5

//Here, we're declaring a variable add and assignming an anonymous function as its value. Let's look to the right of the =:
(arameter1, parameter2) => parameter1 + parameter2; 
//Parameter list ^^^^^    //Function Body^^^^^^^^
///This is a very short function body! it adds parameter1 and parameter 2.
//There are a couple of things to be ware of in the code above: first note that if the function body consists of a single expression, we no longer need to wrap it in curly braces. Secound , when there are no braces, arrow functions have an implicit reutn, i.e, Secound,, when there are no braces, arrow functions have an implicit return, i.e, they automatically return the result of the last expression! This is the only situation in which a  JavaScript function desn't require explicit return with the return keyword.
//to the left of the +> , you see the parameters that are defined for the function. This looks similar to what we would have done with a function declaration: list the parameters, seperated by commas, inside of ().
//if your arrow function has only one paramenter, the (_ around the parameter becomes optional: 
const two Adder= x => x + 2 ;
// is the same as 
const two Adder = (x) => x + 2;

//Almost all developers will drop the parenteses in this case. if we need to do more work than return a single expression, we'll need {} to wrap the multiple lines of ccode, and we'll have to declare a teturn. That sweet no-return  syntax is only availabe if your function body is one expression long.
const sum=(parameter 1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1= parameter1;
}
sum(1,2); => 3

//Describe Situations Where Arrow Functions Are Used
//Arow Functions are often used in Javascript's iteration  methods , An iterator is a method  that allows you to deal with a set of data one at a time. For example, if you  had a group og students' essays, you could only grad  them one at a time.
//in addition to looping constructs such as for, Javascript includes a number of advanced iterators; we'll learn about these later in this section. For now, to see an example of how arrow funcitons are used in these methods, we'll preview Javascript's map() method.
//The .map() method is called on an Array and takes a function as an argument. it iterates through the array, passing each element in turn to the function.  it then takes that function's return value and adds it to a neeww array, leaving the original array unchanged, That new array, containing the modified elements, is treturned at the end after all iterations are complete.
const nums = [ 1,2,3];
const squares = numbs.map(x => x** 2);
squares;//=> [1, 4, 9]
nums; //=> [1,2,3]

//Note the argument being passed to map above is an arrow function! in each iteration through the nums array, map passes the value of the current element to the arrow function as an argument and it is assigned to the parameter x. That value is then squared and stored in a new array. After map has iterated through all of the elements , it returns the new array containing the squared values.
//if all this math stuff seems a bit too textbook-y be reassured that we can iterate through anything, not just numbers. In the following example, we can imagine that overdue TodoItems is a collection of DOM elements:
finishedItems = overdueTodoItems.map(  item => item.className  = "complete");
Headers.innerText = `You finished ${Items.length} items!`; 
//Oer we mighjt use Map in billing  software:
lapsedUserAccounts.map( u => sendBillTo(u.address) );





