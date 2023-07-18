import { Button, Collapse } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Dasboard = () => {
    let [data,setData]=useState("")
    let [email,setEmail]=useState("")
    let [title,setTitle]=useState("")
    let [mileage,setMileage]=useState("")
    let [price,setPrice]=useState("")
    let [color,setColor]=useState("")
    let [image,setImage]=useState("")
    let navigate=useNavigate()
   //let token=JSON.parse(localStorage.getItem("token"))
  
  
//Add
    let handleSubmit=()=>{
        let payload={
            color,
          title,
          image,
          price,
          mileage
   
        }
        console.log(payload)
        

        
        fetch("http://localhost:8080/car/cadd",{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${localStorage.getItem("token")}`,
               "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>{console.log(res)
            alert("data has been Added")
        })
        .catch(err=>console.log(err))
    };
    //GEt
useEffect(()=>{
getdata()
},[])
let getdata=()=>{
    fetch("http://localhost:8080/car/",{
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`,
        
     },
}).then(res=>res.json())
.then(res=>{console.log(res)
    setData(res)})
.catch(err=>console.log(err))
}
//Ascending
let sort1=()=>{
    fetch(`http://localhost:8080/car/ascending`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{setData(res)
   
   
}).catch(err=>console.log(err))


}
//Descending
let sort2=()=>{
    fetch(`http://localhost:8080/car/descending`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{setData(res)
   
   
}).catch(err=>console.log(err))


}
//Filtering
let filter1=()=>{
    fetch(`http://localhost:8080/car/grey`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
 
   setData(res)
}).catch(err=>console.log(err))

}
let filte2=()=>{
    fetch(`http://localhost:8080/car/red`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
   
   setData(res)
}).catch(err=>console.log(err))

}
let filter3=()=>{
    fetch('http://localhost:8080/car/black',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
let filter4=()=>{
    fetch('http://localhost:8080/car/white',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
//Delete
let deleteData=(id)=>{
    fetch(`https://react-crud-1.onrender.com/employees/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
    })
        .then(res=>res.json())
        .then(res=>{console.log(res)
            window.location.reload(false)
        }).catch(err=>console.log(err))
        
    ;

}
//Mileage-10-15Km
let Mileage1=()=>{
    fetch('http://localhost:8080/car/mileage1',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
  return (
    <div>
        <label htmlFor="">title</label>
        <input type="text" placeholder='Enter Email'  value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="">color</label>
        <input type="text" placeholder='Enter firstName' value={color} onChange={(e)=>setColor(e.target.value)}/>
        <label htmlFor="">Price</label>
        <input type="text" placeholder='Enter last name' value={price} onChange={(e)=>setPrice(e.target.value)} />
        <label htmlFor="">Mileage</label>
        <input type="number" placeholder='Enter Salary' value={mileage} onChange={(e)=>setMileage(e.target.value)} />
        
      <button onClick={handleSubmit}>Submit</button>
<div>
    <h1>All Data</h1>
    <div>
        <div>
            
            <button onClick={()=>{
                localStorage.removeItem("token")
                localStorage.removeItem("email")

navigate("/login")
            }}>Logout</button>
        </div>
    </div>
    <Button onClick={sort1} >SortAscending</Button>
    <Button onClick={sort2}>SortDescending</Button>
    <Button onClick={filter1}>Grey</Button>
    <Button onClick={filte2}>Red</Button>
    <Button onClick={filter3}>Black</Button>
    <Button onClick={filter4}>White</Button>
    <select name="" id="">
        <option value="" onClick={Mileage1}>10-15Km</option>
    </select>
   {data.length>0&&
   data.map((el,index)=>{
    return <div>
        <img src={el.image} alt="" />
        <h1>Title:-{el.title}</h1>
        <h2>Price:-{el.price}</h2>
      <p>description:-{el.description}</p>
      <h3>color:-{el.color}</h3>
      <p>Mileage:-{el.mileage}</p>
    </div>
   })}
   
   
</div>
    </div>
  )
}

export default Dasboard
