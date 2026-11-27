
let square = (n) => {
    return n ** 2
}
let cube = (n) => {

    let factorial = (n) => {
        let x = 1
        for (let i = 1; i <= n; i++) {
            x = x * i
        }
        console.log(`factorial of ${n}=${x}`)
    }
    factorial(n)
    return n ** 3


}
export { square, cube }