import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		target: 'esnext'
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
