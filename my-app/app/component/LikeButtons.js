"use client"
import { useOptimistic } from "react";
import {saveLike} from "../actions"

export default function LikeButton(){
    const [Likes, addOptimistic]=useOptimistic(
        initialLikes, (currentLikes,change)=>{currentLikes+changes})
        //update the UI immediately
        async function handleLike(){
    addOptimistic(1)
    await saveLike(postId)
}
return(
    <div>
        <form action={handleLike}>
            <button>Like{Likes}</button>
        </form>
    </div>
)
    }
