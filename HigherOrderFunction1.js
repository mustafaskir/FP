// simple function
let addOne = x => x +1;

// higher order function => func as input
let outPutAddOne = x => addOne(x) // return a function
console.log(outPutAddOne(2)) // 3


// higher order function => func return func
let print = msg => console.log(' => ',msg)
let outPutAddOneWithPrint = (fn,x) => fn(addOne(x)) // take arg function & return function
outPutAddOneWithPrint(print,2) // => 3 
