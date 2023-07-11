<script>
	import Search from '$lib/assets/Search.svg';
</script>

<div class="max-w-md mx-auto self-center mt-10">
	<div class="flex gap-2 justify-center items-center bg-gray-400/10 rounded px-3 py-2">
		<img src={Search} alt="" style:height="100%" style:--tag="h-search" width="24" height="auto" />
		<input
			type="text"
			placeholder="Search Movie"
			class="focus:bg-gray-400/10 bg-transparent rounded px-3 py-2 w-full focus:ring-0 focus:ring-transparent"
		/>
	</div>
</div>
