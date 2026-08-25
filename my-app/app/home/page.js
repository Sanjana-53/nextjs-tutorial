"use client"
export default function Home(){
    function handleClick(){
        alert("Button Clicked")
    }
    return(
        <div>
            <h1>Welcome to Home.</h1>
            <p>This page is render by server side render.</p>
            <button onClick={handleClick}>Click Me</button>

        </div>
    )
}