import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
export interface Character {
	name: string;
	powers: Array<string>;
	side: "good" | "evil";
}

export function announceCharacter(rawCharaters: string): Character {
	const jsonCharacters: Character = JSON.parse(rawCharaters) as Character;
	const logCharacters: Array<string> = [
		`I am ${jsonCharacters.name}.`,
		`My powers are: ${jsonCharacters.powers.join(", ")}.`,
		`I am ${jsonCharacters.side}.`,
	];
	logCharacters.forEach((log: string) => console.log(log));
	return jsonCharacters;
}
