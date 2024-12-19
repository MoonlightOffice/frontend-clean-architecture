import type { IMemoRepository, Memo } from '$lib/core/memo';

export function NewMemoRepository(): IMemoRepository {
	return { get, save };
}

function get(): Memo {
	const memo = localStorage.getItem('memo');
	if (memo === null) {
		return {
			content: '',
			lastUpdatedAt: new Date()
		};
	}

	const parsed: Memo = JSON.parse(memo);

	return {
		content: parsed.content,
		lastUpdatedAt: new Date(parsed.lastUpdatedAt)
	};
}

function save(memo: Memo): void {
	localStorage.setItem('memo', JSON.stringify(memo));
}
