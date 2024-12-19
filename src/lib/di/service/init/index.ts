import { Init } from '$lib/service/init';
import { themeRepository } from '$lib/di/core/theme';

export const init = new Init(themeRepository);
