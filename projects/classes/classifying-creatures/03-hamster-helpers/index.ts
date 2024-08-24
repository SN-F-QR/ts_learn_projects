// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.
export abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number = 0;

	public constructor(species: string) {
		this.species = species;
	}

	abstract eats(food: SmallPetFood): boolean;

	public isHappy(): boolean {
		return this.happiness > 0;
	}
}

export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	public dig() {
		this.happiness += 1;
	}

	public eats(food: SmallPetFood): boolean {
		return (
			food === "insects" ||
			food === "plants" ||
			food === "seeds" ||
			food === "vegetables"
		);
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}

	public run() {
		this.happiness += 1;
	}

	public eats(food: SmallPetFood): boolean {
		return true;
	}
}
