
//server actions concept

import LikeButton from "./component/LikeButtons"

// import { addTask } from "./actions";

// export default function TaskPage() {
//   return (
//     <main>
//       <form action={addTask}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter the task title here..."
//           required
//         />

//         <button type="submit">Add Task</button>
//       </form>
//     </main>
//   );
// }

//optimistic UI
export default async function PostPage(params){
    const post={
        id:"post-101",
        likes:10
    }
    return(
        <main>
            <h1>Next js Likes Post</h1>
            <LikeButton
            postId={post.id}
            initialLikes={post.likes}>
            </LikeButton>
        </main>
    )
}

// "use client"
// import { useEffect, useState } from "react"

// export default function Home(){
//   //connect the backend api with frontend
//   //backend api - api3/student
//   const [student,setStudent]=useState([])
//   //connect the api with frontend
//   useEffect(()=>{
//     fetch("api3/students")
//     .then(response=>response.json())
//     .then(data=>{
//       setStudent(data)
//     })
//   },[])

//   return(
//     <div>
//       <h1>Btech CSE - Student List</h1>
//       {student.map((students)=>(
//         <div key={students.id}>
//           <h2>{students.name}</h2>
//           <p>{students.course}</p>
//         </div>
//       ))}
//       </div>
//   )

// }