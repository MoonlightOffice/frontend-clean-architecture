<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		sideBar,
		bottomBar,
		page
	}: {
		sideBar?: Snippet;
		bottomBar?: Snippet;
		page?: Snippet;
	} = $props();
</script>

{#snippet SideBar()}
	{#if sideBar}
		<nav class="side-bar">
			{@render sideBar()}
		</nav>
	{/if}
{/snippet}

{#snippet PageContent()}
	{#if page}
		<section class="page">
			{@render page()}
		</section>
	{/if}
{/snippet}

{#snippet BottomBar()}
	{#if bottomBar}
		<footer class="bnb">
			{@render bottomBar()}
		</footer>
	{/if}
{/snippet}

<main>
	<div>
		<div class="large-screen">
			{@render SideBar()}
			{@render PageContent()}
		</div>
		{@render BottomBar()}
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;

		div {
			container-type: size;
			width: 100%;
			height: 100%;
			max-width: var(--ct-screen-xl);

			.large-screen {
				display: flex;

				.side-bar {
					display: none;
					width: 30%;
				}

				.page {
					width: 100%;
					display: block;
				}
			}

			.bnb {
				display: block;
				position: fixed;
				left: 0px;
				bottom: 0px;
				width: 100%;
			}

			@container (min-width: 768px) {
				.large-screen {
					.side-bar {
						display: block;
					}

					.page {
						width: 70%;
					}
				}

				.bnb {
					display: none;
				}
			}
		}
	}
</style>
