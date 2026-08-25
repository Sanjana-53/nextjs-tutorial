import Link from "next/link"
export default function navbar(){

    return(
      <nav>
        <Link className="text-red-600 font-bold" href="">Home</Link>
        <Link className="text-red-600 font-bold" href="/about">About</Link>
        <Link className="text-red-600 font-bold" href="/contact">Contact</Link>
        <Link className="text-red-600 font-bold" href="/student">Student</Link>
      </nav>





      //   <nav>
      //   <a href="">Home</a>
      //   <a href="/about">About</a>
      //   <a href="/contact">Contact</a>
      //   <a href="/service">Service</a>
      // </nav>
    )
}