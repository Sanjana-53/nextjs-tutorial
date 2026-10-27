import { NextResponse } from "next/server"
// const users=[
//     {
//         id:1,
//         name:"sanjana",
//         course:"bca"
//     },
//     {
//         id:2,
//         name:"sanjana2",
//         course:"btech"
//     },
// ]


//api/student?course="btech"
//api/student?name="sanjana" & age=22 Query parameters
// export async function GET(request){
//     const {searchParams}=new URL(request.url)
//     const course =searchParams.get('course')
//     return NextResponse.json({
//         course:course
//     })
// }
// export async function GET(){
//     return NextResponse.json(users)
//     }

// export async function GET(){
//     return NextResponse.json({
//         message:"welcome to next api"
//     })
// }


//POST
// export async function POST(){
//     return NextResponse.json({
//         message:"user created successfully"
//     })
// }


// export async function POST(request){
//     const body = await request.json()
//     console.log(body)
//     return NextResponse.json({
//         message:"student is registered",
//         student:body
//     })
// }


// export async function POST(request){
//     const body = await request.json()
//     const {username,password}=body
//     console.log(body)
//     if(username==="admin" && password==="1234"){
//         return NextResponse.json({
//             message:"login successfully"
//         })
//     }
//     return NextResponse.json({
//         message:"Invalid username or password"
        
//     })
// }


export async function POST(request){
    const body = await request.json()
    const {username, password} = body
    console.log(body)
    if(username=="thor" && password=="strongest man"){
        return NextResponse.json({
            message:"welcome god of thunder"
        })
    }
    return NextResponse.json({
        message:"shut upp mann"
    }),
    {status:201},
    {
        message:"you are not that person whom i was waiting for"
    }
}
