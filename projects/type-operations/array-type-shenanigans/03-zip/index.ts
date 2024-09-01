// Write your Zip type here! ✨
// You'll need to export it so the tests can run it.
export type Zip<T extends any[], U extends any[]> = T extends [
	infer firstT,
	...infer restT
]
	? U extends [infer firstU, ...infer restU]
		? [firstT, firstU, ...Zip<restT, restU>]
		: [...T]
	: U;
