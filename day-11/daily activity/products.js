// create a map containing 5products and their prices.Display products whose price is greater than 1000

products= new Map()
products.set("TV",40000)
products.set("Mobile",27000)
products.set("Washing Machine",35000)
products.set("Fan",500)
products.set("AC",300)
for( i of products)
{
    console.log("product=" + i[0])
    console.log("Price=" + i[1])
    console.log(" ")
}
console.log("Items whose price is greater than 1000:")
for( i of products)
{
    if(i[1]>1000)
        console.log(i)
}