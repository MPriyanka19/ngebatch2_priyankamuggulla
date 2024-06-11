// Cursor Park (anyone not typing put your cursor here)

// Rewrite this function in Arrow form:

let sayHello=(firstName: string, lastName: string) => console.log(`sayHello: Hello ${firstName} ${lastName}`);
sayHello('Neil','Jennings')

// TODO make hiEveryone() as arrow function with sayHello functionality
let hiEveryone=(fName: string, lName: string) => sayHello(fName,lName);
hiEveryone('Neil','Jennings')

// Rewrite this function in one-line arrow syntax:
let loadsOfMoney = (myWages: number)=> myWages * 10;

// TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney
let soMuchMoreMoney = (wages:number)=>loadsOfMoney(wages);

const resultSum = soMuchMoreMoney(300)
console.log(`resultSum: ${resultSum}`)
