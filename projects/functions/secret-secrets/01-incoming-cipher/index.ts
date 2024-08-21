// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
export function createCipher(cipher: (x: string) => string) {
	return (text: string): string => {
		let concatText: string = "";
		for (const character of text) {
			concatText = concatText.concat(cipher(character));
		}
		return concatText;
	};
}
