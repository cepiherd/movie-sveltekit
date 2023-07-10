import { error } from "@sveltejs/kit";

export async function load({ url , params }) {
    const urls = url.href + 'api/popular';
    const res = await fetch(urls);
    if (res) {
        return res.json();
    }

    throw error(404, 'Not found');
}
