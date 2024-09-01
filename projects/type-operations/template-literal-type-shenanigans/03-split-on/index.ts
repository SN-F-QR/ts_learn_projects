// Write your SplitOn type here! ✨
// You'll need to export it so the tests can run it.
export type SplitOn<
	Text extends string,
	On extends string
> = Text extends `${infer Before}${On}${infer After}`
	? [Before, ...SplitOn<After, On>]
	: [Text];
