import type { Theme } from '$lib/core/theme';

class Reactive<T> {
	value: T = $state() as T;

	constructor(value: T) {
		this.value = value;
	}
}

export const theme = new Reactive<Theme>('dark');
