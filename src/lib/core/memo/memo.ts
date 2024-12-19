export type Memo = {
	content: string;
	lastUpdatedAt: Date;
};

export interface IMemoRepository {
	get(): Memo;
	save(memo: Memo): void;
}

export interface IMemoTranslator {
	translate(memo: Memo, language: string): Promise<Memo>;
}
