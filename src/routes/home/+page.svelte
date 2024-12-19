<script lang="ts">
	import { Page } from '$lib/ui/components';
	import { TextInputPart } from '$lib/ui/parts';
	import { memoRepository } from '$lib/di/core/memo';
</script>

<Page headBar={{ title: 'Home' }}>
	<TextInputPart {memoRepository} />
</Page>
