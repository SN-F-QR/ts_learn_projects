// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: Array<Array<T>>): Array<T> {
	const uniqueValue: T[] = [];
	const findUnique = (x: T) => {
		if (!uniqueValue.includes(x)) {
			uniqueValue.push(x);
		}
	};
	items.forEach((group: Array<T>) => {
		group.forEach(findUnique);
	});
	return uniqueValue;
}
