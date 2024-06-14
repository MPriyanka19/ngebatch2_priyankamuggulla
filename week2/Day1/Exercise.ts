const balances = [1, 10, 50]
const totaliser = (total:any, balance:any) => total + balance
const startingBalance = 0
const sum = balances.reduce(totaliser, startingBalance)
console.log(sum)