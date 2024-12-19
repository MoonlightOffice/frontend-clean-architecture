import type { Theme, IThemeRepository } from '$lib/core/theme';

export function NewThemeRepository(): IThemeRepository {
	return { get, save };
}

async function get(): Promise<Theme> {
	const t = localStorage.getItem('theme');
	if (t !== null) {
		return t as Theme;
	}

	return 'dark';
}

async function save(theme: Theme): Promise<void> {
	localStorage.setItem('theme', theme);
}
