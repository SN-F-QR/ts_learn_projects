export declare type FilteredArrayItems<T, Filter> = T extends (infer Item)[]
	? FilteredArrayItems<Item, Filter>
	: T extends Filter
	? T
	: never;
