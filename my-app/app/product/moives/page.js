//api key: https://api.tvmaze.com/shows
async function Movies(){
    const response = await fetch("https://api.tvmaze.com/shows",{
        next:{
            revalidate:60 //ISR
        }
    })
    //SSR - cache:no-store
    //SSG -cache:force-cache
    //ISR- next:{
    //revalidate:60}
    if(!response.ok){
        throw new Error("api issue")

    }
    //parse
    return response.json()
}

export default async function AllMovies(){
    const movie = await Movies()
    return(
    <div>
        <h1>Movies</h1>
        
    </div>
    )
}