// Write your functions and type here! ✨
// You'll need to export them so the tests can use them.
export interface SchemaString {
	primitive: "string";
	zType: "primitive";
}

export const string = (): SchemaString => ({
	primitive: "string",
	zType: "primitive",
});

export interface SchemaLiteral<Value> {
	value: Value;
	zType: "literal";
}

export function literal<Value extends string>(
	value: Value
): SchemaLiteral<Value> {
	const result: SchemaLiteral<Value> = {
		value: value,
		zType: "literal",
	};
	return result;
}

export interface SchemaUnion<Values> {
	values: Values;
	zType: "union";
}

export type UnwrapSchemaUnion<Values> = Values extends Array<infer Value>
	? Infer<Value>
	: never;

export function union<Values extends Array<any>>(
	values: Values
): SchemaUnion<Values> {
	return {
		values: values,
		zType: "union",
	};
}

export interface SchemaObject<Properties> {
	properties: Properties;
	zType: "object";
}

export const object = <Properties>(
	properties: Properties
): SchemaObject<Properties> => ({
	properties: properties,
	zType: "object",
});

export type UnwrapSchemaObject<Properties> = {
	[k in keyof Properties]: Infer<Properties[k]>;
};

export type Infer<Schema> = Schema extends SchemaString
	? string
	: Schema extends SchemaLiteral<infer Value>
	? Value
	: Schema extends SchemaUnion<infer Value>
	? UnwrapSchemaUnion<Value>
	: Schema extends SchemaObject<infer Value>
	? UnwrapSchemaObject<Value>
	: never;
