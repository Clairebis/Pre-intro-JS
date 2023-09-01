/*SKILLS*/
import { add, PI } from "./7. math.js";

const result1 = add(1, 2);

const result2 = 2 * PI * 5;

console.log("Sum: ", result1);
console.log("Circumference: ", result2);

/*KNOWLEDGE
1. What is the purpose of the import and export statements in JavaScript, and how do they
enable module functionality?

import and export statements let us split our code in modules, so it can be clearly structured and reused. 
It helps us maintain our code, and avoid having a single file with thousands of lines of code.
Since modules load asynchronously, they can improve the performance of our application.
They also help with naming conflicts, since each module has its own scope.


Export statements let us export functions, classes, objects or variables from a module, so they can be used in other modules.
We use the export keyword, followed by the name of the function, class, object or variable we want to export. We an export several things from a module, by repeating the export statement.
We can export a default value from a module, using the export default statement. This is usually for exporting a single value, such as a class or a function. 
We can only have one default export per module.

Import statements let us import functions, classes, objects or variables from other modules, so we can use them in our code.
Here we use the import keyword, followed by the name of the item we want to import, and the path to the module we want to import it from.
We can import all exports from a module, using the * symbol. This is called a namespace import. e.g. import * as myModule from './my-module.js';

2. How can you export a function or variable from one JavaScript file and import it into
another? Give an example.

Using the export and import statements, and making sure to include the <script type="module"> tag in the HTML file.

e.g. 
// library.js
const year = 2023;

function capitaliseWord(word) {
  return word.toUpperCase();
}

export { capitaliseWord, year };

// main.js
<script type="module">
      import Person from "./personclass.js";
      import { capitaliseWord, year } from "./library.js";
</script>

3. Explain the difference between default and named exports in JavaScript modules. When
would you use each?

Default Exports:
Allow you to export a single value from a module as the default export. 
This value is the "main" thing exported by the module and can be any valid JavaScript value, such as a function, class, object, or primitive value (string, number, boolean, etc.).

To define a default export, you use the export default syntax followed by the value you want to export. You can give it any name you like when importing it in other modules.

// In exportModule.js
const myDefaultExport = 42;
export default myDefaultExport;

// In importModule.js
import myValue from './exportModule.js';

When importing a default export in another module, you don't need to use curly braces. You can use any name you want for the imported value.

import myValue from './exportModule.js';


Named Exports:
Allow you to export multiple values (variables, functions, classes, etc.) from a module with specific names. 
Named exports are ideal when you want to export multiple things from a single module and give them distinct names.

To define named exports, you use the export keyword followed by the name of the value you want to export within curly braces {}.

// In exportModule.js
export const var1 = 10;
export const var2 = 20;

// In importModule.js
import { var1, var2 } from './exportModule.js';

When importing named exports, you must use the exact names specified in the module. You import them within curly braces {}.

import { var1, var2 } from './exportModule.js';

When to Use Each:
Use default exports when you want to export a single "main" value from a module. T
his is useful when you have a module that encapsulates a primary functionality or represents a primary object.

Example: Exporting a utility function as the default export of a module.

export default function myUtility() {
  // ...
}

Use named exports when you want to export multiple values from a module, each with a distinct name. 
Named exports are particularly helpful when you want to export a collection of related functions or constants.

Example: Exporting multiple utility functions as named exports.

export function utilityFunction1() {
  // ...
}

export function utilityFunction2() {
  // ...
}

4. What are the benefits of using JavaScript modules and the import/export syntax for
organizing and managing code?
Code is easier to maintain, since it is split in modules. It's easier to find and update code and reduceses the risk of introducing bugs.
We can reuse code within the app and across different apps.
Modules have their own scope, so we can avoid naming conflicts.
Modules load asynchronously, so they can improve the performance of our application.
It's easier to track which modules depend on each other, and which modules are used in each part of the application.
Different aspects of the application can be developed in parallel, since modules are independent of each other.
Modules can be tested independently, which makes testing easier.
*/
