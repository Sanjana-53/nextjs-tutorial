import { notFound } from "next/navigation";

export default function NotFound(){
    return(
        <div>
            <h1>404:Product Not Found</h1>
            <p>The product you are looking for does not exist.</p>
        </div>
    )
}
