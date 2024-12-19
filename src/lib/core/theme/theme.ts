export type Theme = 'dark' | 'light';

export interface IThemeRepository {
	get(): Promise<Theme>;
	save(theme: Theme): Promise<void>;
}
