// // Same keys and values
// // function createInstructor(firstName, lastName){
// //     return {
// //       firstName: firstName,
// //       lastName: lastName
// //     }
// //   }



// ## ****Same keys and values ES2015****

// ```jsx
// /* Write an ES2015 Version */
// ```
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}
// ## ****Computed Property Names****

// ```jsx
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
// ```

// ## ****Computed Property Names ES2015****



// ```jsx
// /* Write an ES2015 Version */
// ```
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]= "That is my favorite!"
}

// ## Object Methods

// ```jsx
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
// ```

// ## ****Object Methods ES2015****

// ```jsx
// /* Write an ES2015 Version */
// ```

let instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    }
    sayBye() {
        return this.firstName + "says bye!";
    }
}

// ## **createAnimal function**

// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.