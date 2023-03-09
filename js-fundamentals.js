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



/* KNOWLEDGE CHECK */

/* 

Q1: Name the three ways to declare a variable

    var, let, const.
    'var' is the old-school version of 'let', and 'const' is similar to 'let' except it declares that the value cannot be changed after the initial assignment.

Q2: Which of the three variable declarations should you avoid and why?

    'var' We are avoiding it because it does not always behave quite the same as 'let', so it is best to ignore it for now.

Q3: What rules should you follow when naming variables?

    Variable names should be camelCase, except for class variables defined at the top of a JS file-- these should be in SNAKE_CASE.

Q4: What happens when you add numbers and strings together?

    The data type is converted into a string and the two values are concatenated. 
    EX: (3 + "1") = "31";

Q5: How does the Modulo (%), or Remainder, operator work?

    The Modulo/Remainder operator works by returning the remainder from dividing two values. 
    EX: (3 % 1) = 0;

Q6: Explain the difference between == and ===.

    == (loose equality): compares two objects/values and performs a type conversion.
    === (strict equality): Does the same as ==, but does NOT perform type conversion; if types differ, 'FALSE' is returned. 

Q7: When would you receive a NaN result?

    When attempting to execute calculations on a number and non-number string. 
    NaN = Not a Number

Q8: How do you increment and decrement a number?

    A number can be incremented by a value of one using the ++ operator.
    Conversely, a number can be decremented by a value of one using the -- operator.

Q9: Explain the difference between prefixing and postfixing increment/decrement operators.

    postfix form: counter++; // returns value BEFORE incrementing
    prefix form: ++counter; // returns value AFTER incrementing

Q10: What is operator precedence and how is it handled in JS?

    Operators are executed in order of precedence. In Javascript, each operator has an assigned precedence value. 
    Operators with higher precedence values take priority over operators with a lower precedence value.
    Parenthesis are an exception; they take precedence over all operators. 

    NOTE: unary operators have higher precedence than their binary counterparts. 


Q11: How do you access developer tools and the console?

    To access developer tools and the console, simply 'Insepct' a webpage, or use the "Live Server" add-on for VS Code. 

Q12: How do you log information to the console?

    A console(log) statement will log specified information to the console.

Q13: What does unary plus operator do to string representations of integers? eg. +”10” 

    The unary plus operator (the + symbol applied to a single value as opposed to two or more values) converts string 
    representations of integers into a numeric data type. 
*/