import type { IThemeRepository } from '$lib/core/theme';
import { theme } from '$lib/state';

export class Init {
	#themeRepository: IThemeRepository;

	constructor(themeRepository: IThemeRepository) {
		this.#themeRepository = themeRepository;
	}

	// Initialize app. Currently, it will read theme data from local storage
	// and set it to the state.
	async init(): Promise<void> {
		theme.value = await this.#themeRepository.get();
	}
}
