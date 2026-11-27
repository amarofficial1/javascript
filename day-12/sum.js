//Two ways of import
//1st
import {add,subtract} from "./basic.js"
//2nd
import amar from "./basic.js"

console.log(`sum of 4+6= ${add(4,6)}`)
console.log(`difference of 4-6= ${subtract(4,6)}`)
console.log(`difference of 4-6= ${amar.subtract(4,6)}`)
console.log(`sum of 4+6= ${amar.add(4,6)}`)

