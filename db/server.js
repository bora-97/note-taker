const express = require("express")
//Server 
const app = express();
// Port
const PORT = 3000;
// middleware
app.use((req ,res,next)=>{
    console.log (req.url);
    next();
});
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// route
app.get('/',(req , res ) =>{
    res.send('got you!')
})
// Listen
app.listen(PORT,()=>{
    console.log(`Server started on http:localhost:${PORT}`);
}) 