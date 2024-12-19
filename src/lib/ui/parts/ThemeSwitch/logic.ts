import type { IThemeRepository } from '$lib/core/theme';
import { theme } from '$lib/state';

export class ThemeHandler {
	#themeRepository: IThemeRepository;

	constructor(themeRepository: IThemeRepository) {
		this.#themeRepository = themeRepository;
	}

	applyCurrentTheme = async () => {
		const body = document.querySelector('body')!;

		if (theme.value === 'light') {
			body.classList.remove('dark');
			body.classList.add('light');
		} else {
			body.classList.remove('light');
			body.classList.add('dark');
		}
	};

	toggle = async () => {
		if (theme.value === 'light') {
			theme.value = 'dark';
			await this.#themeRepository.save('dark');
			this.applyCurrentTheme();
		} else {
			theme.value = 'light';
			await this.#themeRepository.save('light');
			this.applyCurrentTheme();
		}
	};
}
