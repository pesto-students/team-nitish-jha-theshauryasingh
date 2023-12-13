export function add(a,b){
    return a + b;
   }
   
   export  function subtract(a,b){
    return a - b;
   }
   
   
   //index.js
   import { add, subtract } from "./calculator.js"
   
   console.log(add(2,3));
   console.log(subtract(10,3));