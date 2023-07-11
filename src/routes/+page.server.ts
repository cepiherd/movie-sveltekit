import { error } from "@sveltejs/kit";

export async function load({ url, params }) {
    const popular = await getMovie(url.href, 'popular');
    const topRated = await getMovie(url.href, 'top_rated');

    if (popular && topRated) {
        return {
            popular,
            topRated
        }
    }

    throw error(404, 'Not found');
}


async function getMovie(base_url: string, type = 'popular') {
    const urls = base_url + 'api/movies?type=' + type;
    const res = await fetch(urls);
    if (res) {
        return res.json();
    }
}