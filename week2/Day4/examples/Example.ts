//Pizza
const successHandler = (r:number=1):Promise<number> => new Promise ((resolve)=>{
    setTimeout(()=>resolve(r+1)),1000
})

successHandler().then(console.log)

const orderSuccess =() =>new Promise((resolve,reject)=>{
    
      setTimeout(()=>{
        const orderstatus=false;
        if(orderstatus){
            resolve("order is ready")
        }
        else{
            reject("order is not ready")
        }
    
     },1000)
})
console.log("--PIZZA--")
orderSuccess().then(value=>console.log(value)).catch(value=>console.log(value))

const happy =()=>console.log("you are happy :)");
const sad= ()=>console.log("you are sad :(")
const prom=()=>{
    return new Promise((resolve,reject)=>{
        const h=0;
        if(h){
            setTimeout(resolve,1000)
        }
        setTimeout(reject,1000)
    })
}
prom().then(happy).catch(sad)