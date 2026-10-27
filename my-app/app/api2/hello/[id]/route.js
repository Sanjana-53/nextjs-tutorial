import {NextResponse} from "next/server"

const student =[
    {id:"1",name:"test"},
    {id:"2",name:"test2"},
    {id:"3",name:"test3"},
    {id:"4",name:"test4"},
]
// export async function GET(request, {params}){
//     const {id} = await params
//     return NextResponse.json({
//         message:`student id is ${id}`
//     })


// export async function GET(request, {params}){
//     const {id} = await params
//     const students = student.find(
//         student=>student.id===id
//     )
//     if(!student){
//         return NextResponse.json(
//             {error:"student not found"},
//             {status:404}
//         )
//     }
//     return NextResponse.json(students)
// }

//PUT - update the data
export async function GET(request, {params}){
    const {id} = await params
    const body = await request.json()
    return NextResponse.json({
        message:`student ${id} updated`,
        data:body
    })
}    

