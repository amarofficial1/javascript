//create a bankaccount object with accountholder name and balance, add the following methods:
//deposit(),withdrawal(),checkbalance()

bankaccount={
    accname: "Amar",balance:5000,
    deposit:()=>
    {
        console.log("Current Bank Balance: "+bankaccount.balance)
        console.log("Deposit Amount: ₹100 ")
        console.log("Deposit Completed Successfully")
        bankaccount.balance=bankaccount.balance+100
    },
    withdrawal:()=>{
        console.log("Enter withdrawal amount: 4000 ")
        console.log("withdrawal successfull")
       bankaccount.balance=bankaccount.balance-4000
    },
    checkbalance:()=>{
        console.log("Account Balance= "+bankaccount.balance)
    }
}
bankaccount.deposit()
bankaccount.checkbalance()
bankaccount.withdrawal()
bankaccount.checkbalance()


