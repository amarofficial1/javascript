import read from "readline"
const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter the name: ", (name) => {
    rl.question("enter the first number:", (number1) => {
        rl.question("Enter the Second Number: ", (number2) => {
            console.log("Name = ", name)
            console.log("First number= " + number1)
            console.log("Second Number= " + number2)
            let sum = Number(number1) + Number(number2)
            console.log("Sum = " + sum)
            rl.close()
        })
    })

})