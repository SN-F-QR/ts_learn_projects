// Add your type annotations here! ✨

import { words } from "./words";

async function seconds(amount: number): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, amount * 1000));
}

async function speakLines(
	lines: (number | string | undefined)[]
): Promise<void> {
	for (const line of lines) {
		if (typeof line === "string") {
			console.log(line);
		} else {
			console.log("...");
			await seconds(line ?? 1);
		}
	}
}

function generateLines(quantity: number): (string | number | undefined)[] {
	const lines: Array<string | number | undefined> = [
		generateLine("Lorem ipsum"),
	];

	for (let i = 0; i < quantity - 1; i += 1) {
		lines.push(generateLine());

		if (randomInt(0, 7) >= 4) {
			lines.push(i % 2 === 0 ? undefined : randomInt(4));
		}
	}

	return lines;
}

function generateLine(prefix?: string): string {
	const words: string[] = prefix ? [prefix] : [];
	const quantity = randomInt(3, 10);

	for (let i = 0; i < quantity; i += 1) {
		words.push(randomWord());
	}

	return `${words.join(" ")}.`;
}

function randomInt(to: number): number;
function randomInt(from: number, to: number): number;
function randomInt(fromOrTo: number, to?: number): number {
	return to === undefined
		? randomInt(0, fromOrTo)
		: Math.floor(Math.random() * to) + fromOrTo;
}

function randomWord(): string {
	return words[randomInt(0, words.length)];
}

async function makeGrandSpeech(): Promise<void> {
	const lines = generateLines(randomInt(5, 10));

	await speakLines(lines);
}

makeGrandSpeech();
