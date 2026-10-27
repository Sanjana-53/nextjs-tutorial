//CSR 
//useRouter
"use client"
import {useState} from "react"
import {useRouter} from "next/router"

export default function Login(){
    const router = useRouter()
    const[username, setUsername] = useState("")
    function handleLogin(){
        if(username===""){
            alert("please login with username")
            return
        }
        router.push("/dashboard")
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="enter username" onChange={(e)=>{e.target.value}}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}


// //api key: https://api.tvmaze.com/shows
// import {resolve} from ""
// async function Movies(){
//     const response = await fetch("https://api.tvmaze.com/shows",{
//         next:{
//             revalidate:60 //ISR
//         }
//     })
//     //SSR - cache:no-store
//     //SSG -cache:force-cache
//     //ISR- next:{
//     //revalidate:60}
//     if(!response.ok){
//         throw new Error("api issue")

//     }
//     //parse
//     return response.json()
// }

// export default async function AllMovies(){
//     const movie = await Movies()
//     return(
//     <div>
//         <h1>Movies</h1>

//     </div>
//     )
// }