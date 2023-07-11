<script>
	export let data;
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	$: ({ id, title, backdrop_path, overview, genres, production_companies, vote_average } =
		data.movie);

	$: credits = data.credit.data.cast;
</script>

<div class="relative">
	<img
		src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
		style:height="100%"
		class="w-full object-contain md:max-h-screen max-h-[300px]"
		alt={`picture of ${id}`}
		style:--tag={$page.url.searchParams.get('category') != null
			? id + $page.url.searchParams.get('category')
			: '' + id}
	/>
	<div
		class="md:absolute bottom-0 bg-gradient-to-b h-md from-black/0 md:h-screen to-black/100 py-10 w-full md:px-8"
	>
		<div>
			<div class=" md:absolute bottom-1/4 md:max-w-2xl px-8">
				<h1
					class="font-extrabold text-3xl mb-5"
					style:--tag="h-{$page.url.searchParams.get('category') != null
						? id + $page.url.searchParams.get('category')
						: id}"
				>
					{title}
				</h1>
				<p class="text-sm">
					{overview}
				</p>
				<div class="flex items-center gap-2 py-2">
					<Icon icon="iconoir:star" color="white" />
					{vote_average}
				</div>
				<div class="relative">
					<div class="flex gap-2 mt-5">
						{#each genres as item}
							<span
								class="text-sm bg-gray-700/30 px-2 py-1 rounded-md hover:bg-gray-800 cursor-pointer transition-all shadow"
							>
								{item.name}
							</span>
						{/each}
					</div>
					<div class="flex gap-3">
						{#each production_companies as item}
							<img
								src={'https://image.tmdb.org/t/p/original/' + item.logo_path}
								alt=""
								width="30"
								height="auto"
								class="grayscale hover:grayscale-0 transition-all my-2 object-scale-down"
							/>
						{/each}
					</div>
					<button
						class="p-2 mt-5 md:w-auto w-full bg-red-600 px-8 rounded-sm font-semibold hover:bg-red-700 transition-all"
						>Watch</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="md:mt-10">
	<h1 class="md:text-3xl text-lg font-bold md:ml-10 ml-8">Cast</h1>
	<div class="flex gap-4 snap snap-x snap-mandatory overflow-x-auto scroll-m-0 p-4">
		{#each credits as { name, character, popularity, profile_path }, i}
			<div class="w-full md:first:ml-10 first:ml-5 last:mr-5 hover:bg-gray-500/10 transition-all rounded-md">
				<img
					src={'https://image.tmdb.org/t/p/w200/' + profile_path}
					alt=""
					height="auto"
					class="rounded-md md:min-w-[200px] min-w-[150px]"
				/>
				<div class="py-2 px-2">
					<h1 class="font-semibold">
						{name}
					</h1>

					<p class="text-sm">
						{character}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
