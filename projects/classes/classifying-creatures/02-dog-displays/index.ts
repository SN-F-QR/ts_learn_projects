// Write your class and interface here! ✨
// You'll need to export it so the tests can run it.
export interface PuppyInTheWindow {
	readonly colors: Array<string>;
	readonly furriness: number;
	readonly owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
	colors: Array<string>;
	furriness: number;
	owner: string | undefined;

	public constructor(colors: Array<string>, furriness: number) {
		this.colors = colors;
		this.furriness = furriness;
	}

	public adopt(owner: string) {
		this.owner = owner;
	}
}
