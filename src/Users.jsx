import { useEffect, useState } from "react"

export default function Users(){
    const[users,setUsers]=useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div style={{
            border:'2px solid cyan',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
        }}>
           <h3>Users: {users.length}</h3>
           {
            users.map((user) =>(
                <div>
                <h4>Name: {user.name}</h4> 
                <h5>Username:{user.username}</h5>
                <p>City:{user.address.city}</p>
                </div>
            ))
           }
           
        </div>
    )
}