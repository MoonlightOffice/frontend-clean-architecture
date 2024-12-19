<script lang="ts">
	import { Button } from '.';

	const {
		initialText,
		onSave
	}: {
		initialText: string;
		onSave?: (text: string) => void;
	} = $props();

	let currentText = $state<string>(initialText);
</script>

<div>
	<textarea name="memo" id="memo" placeholder="some memo text here..." bind:value={currentText}
		>{currentText}</textarea
	>
	<Button onclick={() => onSave && onSave(currentText)}>Save</Button>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;

		textarea {
			color: var(--ct-color-on-surface);
			background-color: var(--ct-surface-accent);
			font-size: var(--ct-font-size-md);
			padding: calc(var(--ct-padding) * 2);
			border-radius: var(--ct-border-radius);
			border: unset;
			height: 200px;

			&::placeholder {
				color: var(--ct-color-on-surface);
				opacity: 70%;
			}
		}
	}
</style>
