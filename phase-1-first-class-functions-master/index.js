function Monday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
}

function Tuesday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}

function Wednesday() {
   console.log('Go for a five-mile run');
   console.log('Go for a five-mile run');
}

function Thursday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
}

function Friday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}

function runFiveMiles() {
    console.log('Pump iron');
}

function swimFortyLaps() {
    console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
}

const afterExercise = morningRoutine(liftWeights);

afterExercise();

function returnANamedFunction() {
    // code goes here
}

returnANamedFunction;

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Take no arguments, return an anonymous function!");
    };
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function!");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function!");
    };
}

//we coulg give this function a name if we wanted to , but since
// it's only availabel _ inside_ morning(Routine), we don't need to


//L0G: Go for a five-mile run
//L0G: Pump Iron 

////afterExcercise;
//=> f () {console.log("Nom nom nom, thois $breakkfast} is delicious!`);}

//And we can call the function  later:
//afterExcercise();
//L0G: Nom nom nom, this protein bar is delicious !

    
  //take a call back function as an atgument call back function it doenst matter what this function returns,long as it callls the call back function
 //take no argument 
//The receivesAFunction as an argument
/// The receivesAFunction function shouldtake a callback function as an argument call the callback function ///it doesn't matter what this function returns, so long as it calls the callback function
 //the returnsANamedFunction function should: take no arguments ,return a name function
 //return a nameed function
//The returnsAnAnonymousFunction function should: take no arguments , return a name function
 //The the returnsAnAnonymousFunction function should : take no arguments return an anonymous function 

      

