//create a server
import express from 'express';
const app= express();// create an instance
app.get('/hello',(req,res)=>{   //create an endpoint using get/put/post/delete
    res.write("Hello message from express server"); //message
    res.write("--End--");
    res.end(); //end the reponse.
});
app.get('/courses',(req,res)=>{   //create an endpoint using get/put/post/delete
    var courses =['angular','js','ts','java'];
    /* res.write(courses); //message
    res.end(); //end the reponse. */
    res.send(courses);
});

app.get('/users/:id',(req,res)=>{   //create an endpoint using get/put/post/delete
    res.send("id is "+req.params.id); //end the reponse.
});

app.get('/users',(req,res)=>{   //create an endpoint using get/put/post/delete
    res.write("users endpoint from express server"); //message
    res.end(); //end the reponse.
});

app.get('/courses/byId',(req,res)=>{
    const q = req.query.id;
    res.send("Query by id "+q);
})

app.get('/prod',(req,res)=>{
    var p1={
        "id":"234",
        "name":"Mobile",
        "price":"45674"
    }
    res.send(p1);

});

app.post('/loginUser',(req,res)=>{
    console.log("To create a user login", req.body);
    const obj = req.body.user;
    //app.use(express.json({ob}));
})

//***** EXERCISE****//
app.get('/add/:n1/:n2',(req,res)=>{
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const sum =n1+n2;
    res.send(`sum is ${sum}`);
})



/* app.post('/login',(req,res)=>{
    //console.log("To create a user login", req.body);
    const obj = req.body;
    res.send("added "+ obj);
}) */

//listen to port number

const PORT=3400;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});

