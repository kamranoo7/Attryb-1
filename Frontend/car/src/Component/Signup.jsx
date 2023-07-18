import { Button, Input, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
const Signup = () => {
    let [email,setEmail]=useState("")
    let [pass,setPass]=useState("")
    let [name,setName]=useState("")
    let [gender,setGender]=useState("")
   
let handleSubmit=()=>{
    let payload={
        email,
        pass,
       name,
       gender
    }
    fetch("http://localhost:8080/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>{console.log(res)
        alert("signup Successfully")
    }
    )
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
        <label htmlFor="">Name</label>
    <Input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <label htmlFor="">Gender</label>
    <Input type="text" placeholder="Enter name" value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <label htmlFor="">Email</label>
      <Input type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor="">Password</label>
      <Input type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    
      
    <br />
    <Button onClick={handleSubmit}>SignUp</Button>
    </div>
  )
}

export default Signup
