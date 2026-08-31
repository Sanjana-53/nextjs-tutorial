"use client"
export default function AddToCart(){
    function handleClick(){
        alert("product added to cart..")
    }
    return(
        <div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}