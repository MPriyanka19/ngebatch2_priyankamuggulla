const callback = () => console.log("I was called back")
setTimeout(callback, 1000)
console.log("Waiting...")


const calling =()=>console.log("I am calling you");
setTimeout(calling,2000)
console.log("I need to call");