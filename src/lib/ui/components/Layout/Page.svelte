<script lang="ts">
	import type { Snippet } from 'svelte';

	interface HeadBar {
		title: string;
		withBackButton?: boolean;
	}

	const {
		headBar,
		children
	}: {
		headBar: HeadBar;
		children: Snippet;
	} = $props();
</script>

<div>
	<header>
		{#if headBar.withBackButton}
			<button onclick={() => history.back()}>{`←`}</button>
		{/if}
		<h2>{headBar.title}</h2>
	</header>

	<section>
		{@render children()}
	</section>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		padding: 0px calc(2 * var(--ct-padding));

		header {
			display: flex;
			align-items: center;

			width: 100%;
			height: 4rem;

			gap: 8px;

			button {
				display: flex;
				align-items: center;
				padding: var(--ct-padding);
				border-radius: var(--ct-border-radius);

				font-size: calc(1.5 * var(--ct-font-size-xl));
				font-weight: bold;
				width: 2rem;
				height: 2rem;

				&:hover {
					background-color: var(--ct-surface-accent);
				}
			}
		}
	}
</style>
