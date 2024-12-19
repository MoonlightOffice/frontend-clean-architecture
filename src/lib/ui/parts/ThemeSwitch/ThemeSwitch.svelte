<script lang="ts">
	import type { IThemeRepository } from '$lib/core/theme';
	import { Button } from '$lib/ui/components';
	import { ThemeHandler } from './logic';

	const { themeRepository }: { themeRepository: IThemeRepository } = $props();
	const themeHandler = new ThemeHandler(themeRepository);
</script>

<Button onclick={themeHandler.toggle}>Switch Theme</Button>
