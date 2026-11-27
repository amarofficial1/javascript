let args=process.argv
console.log(args)
console.log("Name= "+args[2])
console.log("First Number = "+args[3])
console.log("Second Number = "+args[4])
console.log("sum= "+(Number(args[3])+Number(args[4])))
//commandline arguments are stored inside a vector knowns as argv,its an array. the first two positions 0 and 1 are occupied by
//pathfile of node then pathway of filename.first user defined command argument starts from args[2]