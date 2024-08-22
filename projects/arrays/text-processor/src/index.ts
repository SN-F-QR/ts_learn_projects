//
export type TextOption = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(
	texts: Array<string>,
	options: TextOption
): Array<Array<string>> {
	const splitTexts = (texts: string) => {
		const words: Array<string> = texts.split(" ");
		let lineTexts: Array<string> = [];
		for (let i = 0; i < words.length; i++) {
			let perLine: Array<string> = [];
			while (true) {
				perLine.push(words[i]);
				i += 1;
				if (
					i >= words.length ||
					perLine.reduce((x: number, y: string) => x + y.length, 0) +
						perLine.length +
						words[i].length >
						options.width
				) {
					i -= 1;
					break;
				}
			}
			let lineText: string = perLine.reduce(
				(x: string, word: string) => x + " " + word
			);
			const spaceLength = options.width - lineText.length;
			if (spaceLength > 0) {
				if (options.align && options.align !== "left") {
					switch (options.align) {
						case "right":
							lineText = " ".repeat(spaceLength) + lineText;
							break;
						case "middle":
							if (spaceLength % 2 === 0) {
								const space: string = " ".repeat(spaceLength / 2);
								lineText = space + lineText + space;
							} else {
								lineText =
									" ".repeat(Math.floor(spaceLength / 2)) +
									lineText +
									" ".repeat(Math.ceil(spaceLength / 2));
							}
							break;
					}
				} else {
					lineText += " ".repeat(spaceLength);
				}
			}
			lineTexts.push(lineText);
		}
		return lineTexts;
	};

	return texts.map(splitTexts);
}
