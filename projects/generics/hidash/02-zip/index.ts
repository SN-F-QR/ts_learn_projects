// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export function zip<T, U>(a: Array<T>, b: Array<U>): Array<T | U> {
	let zipped: Array<T | U> = [];
	a.forEach((first: T, index: number) => {
		zipped.push(first);
		if (index < b.length) {
			zipped.push(b[index]);
		}
	});

	if (a.length < b.length) {
		zipped = zipped.concat(b.slice(a.length));
	}
	return zipped;
}
