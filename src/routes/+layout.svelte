<script>
	import '../app.css';
	import { page } from '$app/stores';
	let darkMode = false;
	import Home from '$lib/assets/Home.svelte';
	import Search from '$lib/assets/Search.svelte';
	const toggleDarkMode = () => {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
	};

	import { preparePageTransition } from '$lib/utils/page-transition';
	preparePageTransition();
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<script>
		$document.documentElement.classList.add('light');
	</script>
</svelte:head>

<main class="dark:bg-[#0b090a] dark:text-[#fdfffc]">
	<slot />
</main>



<style lang="postcss">
	:global(html) {
		background-color: #0b090a;
		text-white: #fdfffc;
	}

	:root {
		color: #fdfffc;
	}
</style>
