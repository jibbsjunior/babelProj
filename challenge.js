// // Execution context stack
// console.log("Global Exection context - root level in the stack");

// function firstLevel() {
//     console.log("Function execution context - first level in the stack");

//     function secondLevel() {
//         console.log("Function execution context - second level in the stack");

//         function thirdLevel() {
//             console.log("Function execution context - third level in the stack");

//         }
//         thirdLevel();

//     }
//     secondLevel();

// }

// firstLevel();


// console.log(this);

// console.log(this === window); //true

// Call method

const myObj = {
    name: "Ajibola",
    age: null
};

function myFn() {
    console.log(this);

}

// myFn(); //window

myFn.call(myObj);

