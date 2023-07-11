<script>
	export let data;
	import Home from '$lib/assets/Home.svelte';
	import Search from '$lib/assets/Search.svelte';
	const popular = data.popular.data.results;
	const topRated = data.topRated.data.results;
</script>

<div class="w-full mx-auto overflow-auto">
	<h1 class="ml-10 font-semibold text-lg">Popular</h1>
	<div class="flex gap-4 snap-x snap-mandatory overflow-x-auto scroll-m-0 p-4">
		{#each popular as item}
			<a href={'/' + item.id}>
				<div class="min-w-[300px] md:first:ml-10">
					<img
						src={'https://image.tmdb.org/t/p/w300/' + item.backdrop_path}
						alt={item.title}
						style:--tag="h-{item.id}"
						class="rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition-all snap-center"
					/>
					<div class="snap-center p-2">{item.title}</div>
				</div>
			</a>
		{/each}
	</div>

	<h1 class="ml-10 font-semibold text-lg">Top Rated</h1>
	<div class="flex gap-4 snap-x snap-mandatory overflow-x-auto scroll-m-0 p-4">
		{#each topRated as item}
			<a href={'/' + item.id + '?category=topRated'}>
				<div class="min-w-[300px] md:first:ml-10">
					<img
						src={'https://image.tmdb.org/t/p/w300/' + item.backdrop_path}
						alt={item.title}
						style:--tag="h-{item.id + 'topRated'}"
						class="rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition-all snap-center"
					/>
					<div class="snap-center p-2">{item.title}</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<div class="fixed w-full bottom-10 px-8 md:px-0">
	<div
		class="max-w-sm grid grid-cols-2 gap-3 items-center justify-center mx-auto w-full text-white p-2 bg-gray-500/10 rounded-md"
	>
		<a href="/" class="mx-auto hover:bg-gray-200/10 hover:p-2 transition-all rounded-md">
			<Home />
		</a>
		<a
			href="/search"
			class="mx-auto hover:bg-gray-200/10 hover:p-2 transition-all rounded-md"
			style:--tag="h-search"
		>
			<Search />
		</a>
	</div>
</div>
