// InfiniPizza!
type PizzaData = {
  name: string, 
  cost: number,
  size: string
}

const successHandler = (pizzaData: PizzaData) => { // Create a function to use later
  const {name,cost,size}=pizzaData;
  console.log('I was called back with:', pizzaData) //complex processing
  console.log('name:', name) //console.log('name:', pizzaData.name)
  console.log('cost: £', cost)//console.log('cost:', pizzaData.cost)
  console.log('size:', size) //console.log('size:', pizzaData.size)
}

const fetchData = (pizzaName: string,pizzaCost:number) => {
  return {
    name: pizzaName,
    cost: pizzaCost,
    size: '12"'
  }
}

const fetchDbPizzaDetails = (pizzaName: string,pizzaCost:number): Promise<PizzaData> =>
  new Promise((resolve, reject) => {//long running action like connect to db, get loads of data
    const databaseData: PizzaData = fetchData(pizzaName,pizzaCost) // for example
    resolve(databaseData)
    
  })

   

console.log('Start now...')

// Promise to do some code
fetchDbPizzaDetails('Margherita',25).then(successHandler)

console.log('...Done')

export {}
