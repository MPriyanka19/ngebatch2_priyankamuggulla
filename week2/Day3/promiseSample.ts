const call = () => console.log('Sending delivery!')
const asyncCookPizza = () =>{
 return new Promise((resolve) => {
 // Do something that takes ages, like cook a Pizza
 // Then
 setTimeout(()=>{
    resolve("your pizza is deleivered");
 },2000)
 })
}

asyncCookPizza().then(call);
asyncCookPizza().then(value=> console.log(value))

console.log("Waiting...")