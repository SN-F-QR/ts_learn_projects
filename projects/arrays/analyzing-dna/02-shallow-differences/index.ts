// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function shallowDifferences(
	a: Array<string>,
	b: Array<string>
): Array<string | undefined> | undefined {
	if (a.length !== b.length) {
		return undefined;
	}
	const differences: Array<string | undefined> = Array(a.length);
	for (const [index, dna] of a.entries()) {
		if (dna === b[index]) {
			differences[index] = dna;
		} else {
			differences[index] = undefined;
		}
	}
	return differences;
}
