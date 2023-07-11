// 'https://api.themoviedb.org/3/movie/385687?language=en-US'
// ' \

import { error } from "@sveltejs/kit";

export async function load({ params, url }) {
    const urls = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const res = await fetch(urls, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1ZjlkOGM3MGI4NTlkYjhhN2YzMjdlZTZlNWQ3NSIsInN1YiI6IjYxYzE4M2MyYTIxN2MwMDA4YWVjNDBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gxDimvjtWsm8weWX9eoX6f0gZK4YOCcY3vXSYycopI'
        }
    });
    const credits = await fetch(url.origin + "/api/credits/" + params.id);

    if (res) {
        return {
            movie: await res.json(),
            credit: await credits.json()
        }
    }

    throw error(404, 'Not found');
}
