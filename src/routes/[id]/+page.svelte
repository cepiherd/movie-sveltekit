<script>
	export let data;
	console.log(data);
	$: ({ id, title, backdrop_path, overview, genres } = data);
</script>

<div>
	<img
		src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
		style:height="100%"
		class="w-full object-contain md:max-h-screen max-h-[300px]"
		alt={`picture of ${id}`}
		style:--tag={id}
	/>
	<div
		class="absolute bottom-0 bg-gradient-to-b h-md from-black/0 h-screen to-black/100 py-10 w-full md:px-8"
	>
		<div>
			<div class=" absolute bottom-1/4 md:max-w-2xl px-8">
				<h1 class="font-extrabold text-3xl mb-5" style:--tag="h-{id}">
					{title}
				</h1>
				<p class="text-sm">
					{overview}
				</p>
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
					<button
						class="p-2 mt-5 md:w-auto w-full bg-red-600 px-8 rounded-sm font-semibold hover:bg-red-700 transition-all"
						>Watch</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
