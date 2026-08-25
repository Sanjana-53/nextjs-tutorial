export default async function Blog({params}){
    //get the values from the url
    const {category, slug}=await params

    return(
        <div>
            <h1>Blog Details</h1>
            <p>Category:{category}</p>
            <p>Post:{slug}</p>
        </div>
    )
}


//http://localhost:3000/blog/react/nextjs-routing