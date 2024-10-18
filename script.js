// import { num1, num2 } from "./js/variable.js";

// console.log(num1);
// console.log(num2);
// console.log(num1 + num2);

import * as vars from "./js/variable.js";
import { add } from "./js/functions.js";

console.log(vars.num1);
console.log(vars.num2);

console.log(add(vars.num1, vars.num2));
