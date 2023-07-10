<script>
	export let data;
	console.log(data);
	$: ({ title, backdrop_path, overview } = data);
</script>

<div>
	<img
		src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
		style:height="auto"
		class="w-full object-contain max-h-screen"
		alt={`picture of ${title}`}
		style:--tag={title}
	/>
	<div
		class="absolute bottom-0 bg-gradient-to-b h-md from-black/0 h-screen to-black/100 py-10 w-full px-8"
	>
		<div class=" absolute bottom-1/4 max-w-2xl">
			<h1 class="font-extrabold text-3xl mb-5" style:--tag={title}>
				{title}
			</h1>
			<p class="text-sm">
				{overview}
			</p>
		</div>
	</div>
</div>
