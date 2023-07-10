<script>
	export let data;

	const movies = data.data.results;
	console.log(movies);
</script>

<div class="w-full mx-auto overflow-auto">
	<h1 class="ml-10 font-semibold text-lg">Popular</h1>
	<div class="flex gap-4 snap-x snap-mandatory overflow-x-auto scroll-m-0 p-4">
		{#each movies as item}
			<a href={'/' + item.id}>
				<div class="min-w-[300px] md:first:ml-10">
					<img
						src={'https://image.tmdb.org/t/p/w300/' + item.backdrop_path}
						alt=""
						class="rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition-all snap-center"
					/>
					<div class="snap-center p-2">{item.title}</div>
				</div>
			</a>
		{/each}
	</div>
</div>
