"use server"
import { revalidatePath } from "next/cache"

export async function addTask(formData){
    const title = formData.get("title")
    //validation
    if(!title){
        throw new Error("Task title is required")
    }
    //connection to the database
    console.log("new task", title)
    revalidatePath("/task")
}