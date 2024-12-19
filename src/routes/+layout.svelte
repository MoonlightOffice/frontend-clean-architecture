<script lang="ts">
	import '$lib/ui/globals.css';
	import { Layout } from '$lib/ui/components';
	import { BottomBar, SideBar } from '$lib/ui/parts';
	let { children } = $props();
</script>

<Layout>
	{#snippet sideBar()}
		<SideBar />
	{/snippet}
	{#snippet page()}
		{@render children()}
	{/snippet}
	{#snippet bottomBar()}
		<BottomBar />
	{/snippet}
</Layout>
