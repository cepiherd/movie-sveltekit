import { error } from "@sveltejs/kit";

export async function load({params}) {
    const url = 'http://localhost:5173/api/popular';
    const res = await fetch(url);
    if (res) {
        return res.json();
    }

    throw error(404, 'Not found');
}
