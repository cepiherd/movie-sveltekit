import { json } from "@sveltejs/kit"
export const GET = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1ZjlkOGM3MGI4NTlkYjhhN2YzMjdlZTZlNWQ3NSIsInN1YiI6IjYxYzE4M2MyYTIxN2MwMDA4YWVjNDBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gxDimvjtWsm8weWX9eoX6f0gZK4YOCcY3vXSYycopI"
    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return json({
        status : 200,
        data : await res.json()})
}