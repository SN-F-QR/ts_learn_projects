// Write your Parrot class here! ✨
// You'll need to export it so the tests can run it.
export class Parrot {
	#name: string;
	#phrases: Array<string>;

	public constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${this.#name} wants a cracker!`];
	}

	public announce(): string {
		return `Squawk! I'm ${this.#name}!`;
	}

	/**
	 * Takes in a string and adds it to the internal #phrases member
	 * @param texts text to learn
	 */
	public learn(texts: string) {
		this.#phrases.push(texts);
	}

	public speak(): string {
		return this.#phrases[Math.floor(Math.random() * this.#phrases.length)];
	}
}
