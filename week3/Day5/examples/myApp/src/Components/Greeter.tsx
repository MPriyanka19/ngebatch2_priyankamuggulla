export default function Greeter(){
    return <h2>Happy Learning!! :)</h2>
}
export const Hello  = () =>{
    const message ='Hello..'
    const getQuote = () =>{
        return "get the Quote"
    }
    const emp = {id :1 , name : "Priyanka" ,skills : ["java","Js"]}
    const cart =['apple','grocery1','grocery2']
    const cart1=[]
    function showCart ():JSX.Element{
        
        if(cart?.length == 0) return  <div>"Cart is empty"</div>
        return <div>{cart}</div>
    }
    return (
      <>
        <h3>{"Message: " + message}</h3>
        <p>{getQuote()}</p>
        <p>{showCart()}</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <tr>
                <td>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
