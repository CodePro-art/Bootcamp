/*----------------------- 1 -----------------------------------
Q: What is the difference between import and require?
​
A: Require -we can't selectively load only the pieces we need. 
   Import -we can selectively load only the pieces we need. 
--------------------------------------------------------------*/
​
/*----------------------- 2 ----------------------------------------
Q: How can you enable using the import syntax using node js
Give 2 node.js environment variables that are not available
when using the import syntax.
​
A: Node.js provides a global variable process.env, 
an object that contains all environment variables available to 
the user running the application.  
such as: 
1. const hostname = process.env.HOST;
2. const port = process.env.PORT;
------------------------------------------------------------------------*/
​
/*----------------------- 3 -----------------------------------
Q: Create 3 functions using the export/import syntax.
Import the file system module using the import syntax.
​
A: 1. Creating a Module
   2. Exporting a Module: Filename: func.js
 Example:
 
 function add(x, y) {
   return x + y;
}
  
function subtract(x, y) {
   return x - y;
}
​
function multy(x, y) {
   return x * y;
}
​
module.exports = { add, subtract, multy }
​
​
--------------------------------------------------------------*/