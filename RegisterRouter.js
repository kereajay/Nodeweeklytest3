const express=require('express')
const RegisterRouter=express.Router()
RegisterRouter.post('/register',(req,res,next)=>{
    const {FirstName,LastName,PhoneNumber,Email,Password}=req.body
    console.log(FirstName,LastName,PhoneNumber,Email,Password)
    const FisrtNamearray=FirstName.split('')
    const LastNamearray=LastName.split('')
    const PhoneNumberarray=PhoneNumber.split('')
    const passwordarray=Password.split('')
    console.log(passwordarray.length)
    function containuppercase(Password){
        const regex=/[A-Z]/
        return regex.test(Password)
        
    }
    function containsSpecialCharacter(password) {
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        return specialCharPattern.test(password);
      }

    if(FisrtNamearray[0]>='a'&&FisrtNamearray[0]<='z'){
        next(new Error('first name first letter should be capital')) 
    }
   else if(LastNamearray[0]>='a'&&LastNamearray[0]<='z'){
        next(new Error('last name first letter should be capital'))
        
    }
    else if(PhoneNumberarray.length!=10){
        next(new Error('Phone number should be 10 digit'))
    }
    else if(Email.includes('@')===false){
        next(new Error('Email should contain @'))
    }
    else if(passwordarray.length<8){
        next(new Error('Password should be greater than 8'))

    }
    else if(containuppercase(Password)===false){
        next(new Error('Password should contain uppercase'))
    }
    else if(containsSpecialCharacter(Password)===false){
        next(new Error('Password should contain special character'))
    }
    else{
    res.json({success:true,message:'register successfully'})
    }
    
})
module.exports=RegisterRouter