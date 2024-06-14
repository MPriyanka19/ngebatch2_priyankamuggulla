const Noofbooks=5;

const callBook=() =>{
    console.log("Book is called!!, Please read")
   return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(Noofbooks);
        }, 1000);
    })
}

const addtocart=(count:number=0)=>{
   return new Promise<number>((resolve) => {
        setTimeout(()=>resolve(count+=1),1000)
    })
}

const Operation= async () => {
    const book:any = await callBook();
    const cart= await addtocart(book); 
    return `No of Books in the cart ${cart}`;
}
const begin = async () => {
    console.log(await Operation())
  }
  console.log("Start")

  begin() //Operation().then(console.log)