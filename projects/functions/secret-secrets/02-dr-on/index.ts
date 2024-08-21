// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export function createAdvancedCipher(
	onVowel: (x: string) => string,
	onConsonant: (x: string) => string,
	onPunctuation: (x: string) => string
) {
	return (text: string) => {
		let secretText: string = "";
		let sercetChar: string;
		for (const char of text) {
			if ("aeiou".includes(char)) {
				sercetChar = onVowel(char);
			} else if ("bcdfghjklmnpqrstvwxyz".includes(char)) {
				sercetChar = onConsonant(char);
			} else {
				sercetChar = onPunctuation(char);
			}
			secretText = secretText.concat(sercetChar);
		}
		return secretText;
	};
}
