//('https://fakestoreapi.com/products')

export default async function ProductPage({params}){
    const response = await fetch('https://fakestoreapi.com/products',
        {cache:"no-store"}
    ) 
    //cache: "no-store" for ssr components

    //or for ISR -> 
    next:{
        revalidate:60
    }
const products = await response.json()
    return(
        <div>
            <h1>Products</h1>
            {products.map((products)=>{

            })}
        </div>
    )
}