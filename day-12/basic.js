let add=(a, b)=> {
     let s = a + b
    //console.log("Sum of " + a + " + " + b + " = ", s)
    return s
}
let subtract=(a, b)=>{
     let s = a - b
    //console.log("Difference of " + a + " - " + b + " = ", s)
    return s
}
//Two ways of exporting
//1st
export {add,subtract} 
//2nd
export default{add,subtract}