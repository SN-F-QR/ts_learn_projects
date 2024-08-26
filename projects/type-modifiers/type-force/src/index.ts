// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

export type Mutation = keyof typeof mutationsLibrary;

export interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

function createCharacter(name: string, mutations: Array<string>) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation as Mutation](character);
	}

	return character;
}

export interface CharacterSetting {
	name: string;
	mutations: Array<string>;
}

export function duel(good: CharacterSetting, bad: CharacterSetting) {
	const goodCharacter: Character = createCharacter(good.name, good.mutations);
	const badCharacter: Character = createCharacter(bad.name, bad.mutations);
	const truePower = (x: Character, y: Character) => x.power / y.toughness;
	if (
		truePower(goodCharacter, badCharacter) >=
		truePower(badCharacter, goodCharacter)
	) {
		return ["hero", goodCharacter];
	} else {
		return ["villain", badCharacter];
	}
}
