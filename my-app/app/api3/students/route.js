//route handlers - backend api in nextjs
//api3 -> students->route.js

import { NextResponse } from "next/server";

export async function GET() {
const student =[
    {
        id:1,
        name:"sanjana",
        course:"btech"
    },
    {
        id:2,
        name:"sanjana2",
        course:"btech"
    },
    {
        id:3,
        name:"sanjana3",
        course:"btech"
    }
]
return NextResponse.json(student)

    // return NextResponse.json({
    //     message:"Student api is working fine..."
    // })
}
