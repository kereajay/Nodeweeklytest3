const express=require('express')
const RegisterRouter=require('./RegisterRouter')
const app=express()
app.use(express.json())
app.use(RegisterRouter)

const error=(err,req,res,next)=>{
    res.status(401).json({success:false,message:err.message})
    
}
app.use(error)
app.listen(3698,()=>console.log('server is running on port 3698'))



//example user credential
// {
//     "FirstName":"John",
//     "LastName":"Doe",
//     "Email":"john@gmail.com",
//     "PhoneNumber":"1234567890",
//     "Password":"Joh#n1234"

// }