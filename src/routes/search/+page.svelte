<script lang="ts">
	import Search from '$lib/assets/Search.svg';
	import { fade } from 'svelte/transition';
	let filterResult:any = [];
	async function findByKeyword(keyword:string) {
		let url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
		const res = await fetch(url, {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1ZjlkOGM3MGI4NTlkYjhhN2YzMjdlZTZlNWQ3NSIsInN1YiI6IjYxYzE4M2MyYTIxN2MwMDA4YWVjNDBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gxDimvjtWsm8weWX9eoX6f0gZK4YOCcY3vXSYycopI'
			}
		});

		const result = await res.json();
		return (filterResult = result.results);
	}
</script>

<div class="max-w-md mx-auto self-center mt-10">
	<div class="flex gap-2 justify-center items-center bg-gray-400/10 rounded px-3 py-2">
		<img src={Search} alt="" style:height="100%" style:--tag="h-search" width="24" height="auto" />
		<input
			type="text"
			placeholder="Search Movie"
			on:input={(e) => findByKeyword(e.target.value)}
			class="focus:bg-gray-400/10 bg-transparent rounded px-3 py-2 w-full focus:ring-0 focus:ring-transparent"
		/>
	</div>
</div>

<div class="flex gap-2 flex-wrap">
	{#each filterResult.splice(0, 10) as { id, poster_path }, i}
		<div transition:fade class="p-3">
			<a href={`/${id}`}>
				<img
					src={'https://image.tmdb.org/t/p/original/' + poster_path}
					alt=""
					width="200"
					style:--tag="h-{id}"
					class="rounded-lg shadow hover:w-[210px] hover:cursor-pointer transition-all"
				/>
			</a>
		</div>
	{/each}
</div>
