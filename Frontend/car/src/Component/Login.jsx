import { Button, Input, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
const Signup = () => {
    let [email,setEmail]=useState("")
    let [pass,setPass]=useState("")
   
   
let handleLogin=()=>{
    let payload={
        email,
        pass,
        
    }
    fetch("http://localhost:8080/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((res)=>{console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("email",email)
        alert("Login Successfully")
    }
    )
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
        
      <label htmlFor="">Email</label>
      <Input type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor="">Password</label>
      <Input type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      
    <br />
    <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Signup
