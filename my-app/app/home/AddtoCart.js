//api = https://jsonplaceholder.typicode.com/users

import {useEffect, usesState} from "react"
export default function Student(){
    const [student, setStudent]= useState([])
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setStudent(data)
            setLoading(false)
        })
    },[])
    if(loading){
        return(
            <p>Loading the students data...</p>
        )
    }
    return(
        <div>
            <h1>Students</h1>
            
        </div>
    )
}



// "use client"
// import { useState } from "react";

// export default function SearchBox(){
//     //useState
//     const [search,setSearch]= useState()
//     return(
//         <div>
//             <input
//             type="text"
//             placeholder="type here for search products here..."
//             value={search}
//             onChange={(e)=>setSearch(e.target.value)}
//             ></input>
//             <p>Search value is : {search}</p>
//         </div>
//     )
// }

// "use client"
// export default function AddToCart(){
//     function handleClick(){
//         alert("product added to cart..")
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Add to Cart</button>
//         </div>
//     )
// }