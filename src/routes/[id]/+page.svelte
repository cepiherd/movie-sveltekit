<script>
	export let data;
	console.log(data);
	$: ({ id, title, backdrop_path, overview } = data);
</script>

<div>
	<img
		src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
		style:height="100%"
		class="w-full object-contain max-h-screen"
		alt={`picture of ${id}`}
		style:--tag={id}
	/>
	<div
		class="absolute bottom-0 bg-gradient-to-b h-md from-black/0 h-screen to-black/100 py-10 w-full px-8"
	>
		<div class=" absolute bottom-1/4 max-w-2xl">
			<h1 class="font-extrabold text-3xl mb-5" style:--tag="h-{id}">
				{title}
			</h1>
			<p class="text-sm">
				{overview}
			</p>
		</div>
	</div>
</div>
