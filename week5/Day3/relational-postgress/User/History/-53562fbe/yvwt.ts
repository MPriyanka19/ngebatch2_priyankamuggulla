
import express from 'express'
 
 
let app = express();
 
app.get('/',(req, res)=>{
    res.send(`
<div align="center">
<h1>Hello , Welcome to my Express Server..</h1>
</div>
    `)
});

app.get('/employee',(req,res)=>{
    
})
 
app.listen(3000, ()=>{
    console.log("My Express Server is Running on Port No 3000....");
})