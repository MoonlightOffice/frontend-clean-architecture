import { themeRepository } from '$lib/di/core/theme';
import { init } from '$lib/di/service/init';
import { ThemeHandler } from '$lib/ui/parts';

async function initApp() {
	await init.init();

	const themeHandler = new ThemeHandler(themeRepository);
	themeHandler.applyCurrentTheme();
}

await initApp();
