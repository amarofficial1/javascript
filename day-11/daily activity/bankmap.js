//create a map containing account holders name and their balances.find the account with the highest balance

bank= new Map()
bank.set("Amar",99999)
bank.set("Jain",50000)
bank.set("Siva",40000)
bank.set("Paul",10000)
bank.set("Adona",99999)
x=1
for( i of bank)
{
    console.log(x+".Account Holder Name=" + i[0])
    console.log("Account Balance=" + i[1])
    console.log(" ")
    x++
}
for( i of bank)
{
    x=0
    for(j of bank)
    {
        if(i[1]>=j[1])
            x++
    }
    if(x==(bank.size))
    {
       console.log("The account holder with highest balance:"+i[0])
       console.log("with Bank balance of : ₹"+i[1])
    }
}