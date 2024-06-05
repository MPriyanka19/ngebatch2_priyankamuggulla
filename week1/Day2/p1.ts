console.log("Functions Demo");
 
let AF = () => console.log("I am Argument Function...");

 
 
let F2= (af:any) =>
{
    console.log("I am Function F1");
    let Inner =()=> 
    {
        console.log("I am Function Inner....");
    };
    Inner();
    af();
    return Inner;
};
 
var RF = F2(AF);
RF();