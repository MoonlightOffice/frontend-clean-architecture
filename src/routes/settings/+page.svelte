<script lang="ts">
	import { ThemeSwitch } from '$lib/ui/parts';
	import { themeRepository } from '$lib/di/core/theme';
	import { Page } from '$lib/ui/components';
</script>

<Page headBar={{ title: 'Settings' }}>
	<ThemeSwitch {themeRepository} />
</Page>
