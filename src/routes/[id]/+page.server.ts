// 'https://api.themoviedb.org/3/movie/385687?language=en-US'
// ' \

import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const res = await fetch(url, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1ZjlkOGM3MGI4NTlkYjhhN2YzMjdlZTZlNWQ3NSIsInN1YiI6IjYxYzE4M2MyYTIxN2MwMDA4YWVjNDBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gxDimvjtWsm8weWX9eoX6f0gZK4YOCcY3vXSYycopI'
        }
    });
    if (res) {
        return res.json();
    }

    throw error(404, 'Not found');
}
