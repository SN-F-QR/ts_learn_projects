// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
export function createCodeCracker(craker: {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
}) {
	return (text: string) => {
		let success: string | undefined = undefined;
		for (let i = 0; i < craker.attempts; i++) {
			const guess: string = craker.makeGuess(text, i);
			console.log(guess);
			if (craker.validateGuess(guess)) {
				success = guess;
				return success;
			}
		}
		return success;
	};
}
