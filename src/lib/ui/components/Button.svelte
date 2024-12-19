<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, onclick = () => {} }: { children: Snippet; onclick?: () => void } = $props();
</script>

<button {onclick}>
	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	button {
		padding: 20px 50px;
		min-width: 40px;
		min-height: 40px;
		max-width: 100%;
		color: var(--ct-text-on-primary);
		background-color: var(--ct-primary);
		border-radius: var(--ct-border-radius);
		font-weight: bold;
		font-size: var(--ct-font-size-lg);
		word-break: break-all;
		text-align: center;

		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.04);
		}
		&:active {
			transform: scale(0.96);
		}
	}
</style>
