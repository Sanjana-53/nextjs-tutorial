//const products=[
//     {
//         id:10,
//         name:"phone23",
//         price:123456
//     },
//     {
//         id:11,
//         name:"Phone25",
//         price:66423
//     },
//     {
//         id:12,
//         name:"phone34",
//         price:95689
//     }
// ]
// export default async function ProductPage({params}){
//     const {id}=await params
//     const product = products.find((item=>item.id=== parseInt(id)))

//     return(
//         <div>
//             <h1>ProductPage Details</h1>
//             <p>Price:{product.price}</p>
//             <p>Product name: {product.name}</p>
//             <p>Product Id: {id}</p>
//         </div>
//     )
// }


import { notFound } from "next/navigation";
export default async function Product({params}){
    const{id}= await params
    const response= await fetch(`https://dummyjson.com/products/${id}`)
    if(!response.ok){
        notFound()
    }
    const product = await response.json()
    console.log(product)
if(!product){
    notFound()
}
    return(
        <div>
            <h1>Product Details</h1>
            <img src={product.thumbnail}width="300"/>
            <p>Rating:{product.rating}</p>
            <p>Category:{product.category}</p>
            <p>Price:{product.price}</p>
        </div>
    )
}