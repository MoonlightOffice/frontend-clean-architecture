<script lang="ts">
	import { TextInput } from '$lib/ui/components';
	import type { IMemoRepository } from '$lib/core/memo';

	const { memoRepository }: { memoRepository: IMemoRepository } = $props();

	const memo = memoRepository.get();
</script>

<TextInput
	initialText={memo.content}
	onSave={(text: string) => {
		memoRepository.save({
			content: text,
			lastUpdatedAt: new Date()
		});
	}}
/>

<p>Last updated at: {memo.lastUpdatedAt.toISOString()}</p>
