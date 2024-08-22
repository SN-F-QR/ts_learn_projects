// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
export function shallowEquality(a: Array<string>, b: Array<string>): boolean {
	if (a.length !== b.length) {
		return false;
	}

	for (const [index, dna] of a.entries()) {
		if (b[index] !== dna) {
			return false;
		}
	}
	return true;
}
