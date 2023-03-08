// Variables
//    A "named storage" for data. Used to store various types of data.

// A variable can be declared using the syntax below. Each keyword has a different purpose.

var variable; // old-school way to declare a variable.
let data; // Essentially the newer equivalent of 'var'. 
const constant = 0;  //const: a declaration in which the assigned value never changes after this first assignment. 
                    // Usually near the top of the JS file. Naming convention is all capital-case and underscores, 'VARIABLE_NAME'.
                    // NOTE: a const variable whose value is calculated in run-time (during execution) is named normally: 'varableName'.

/* 
 Task: Working with variables 
 */

// Declare two variables: admin and name.

let admin, name;

// Assign the value "John" to name.

name = "John";

// Copy the value from name to admin.

admin = name;

// Show the value of admin using alert (must output "John").

alert(admin);

/* 
Task: Giving the right name
*/

// Create a variable with the name of our planet. How would you name such a planey=t?
let ourPlanetName = "Earth";

// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUserName = "John";

/* 
Task: Uppercase const?
*/

//Would it be right to use the uppercase for birthday? For age? Or even for both?

// Birthday will never change, it is hard coded-- so it's fine in uppercase. However, age is calculated in run-time, so it maintains traditional casing rules. 