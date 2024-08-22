// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(
	a: Array<string>,
	b: Array<string>
): Array<Array<string | undefined> | undefined> | undefined {
	if (a.length !== b.length) {
		return undefined;
	}

	const differences: Array<Array<string | undefined> | undefined> = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			differences.push(undefined);
			continue;
		}
		differences.push([]);

		// let differed: boolean = false;
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) {
				differences[i]?.push(undefined);
			} else {
				differences[i]?.push(a[i][j]);
			}
		}

		// differences.push(differed ? undefined : a[i]);
	}
	return differences;
}
