export declare type Zip<T extends any[], U extends any[]> = T extends [
	infer firstT,
	...infer restT
]
	? [firstT, ...Zip<U, restT>]
	: [...T, ...U];
