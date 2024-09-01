export declare type Reverse<T extends Array<any>> = T extends [
	infer U,
	...infer Rest
]
	? [...Reverse<Rest>, U]
	: T;
