// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.
export interface Catacomb<T> {
	inside: Buried<T>;
	type: "catacomb";
}

export interface TunnelSystem<T> {
	entrances: Array<Buried<T>>;
	type: "tunnels";
}

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export interface Treasure<T> {
	content: T;
	type: "treasure";
}

export type Buried<T> = Array<Buried<T>> | NextArea<T> | Treasure<T>;

export interface Collected<Type, Fake extends Type, Real extends Type> {
	fake: Array<Fake>;
	real: Array<Real>;
	scrap: Array<Type>;
}

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (datum: Content) => datum is Fake,
	isReal: (datum: Content) => datum is Real
): Collected<Content, Fake, Real> {
	const collected: Collected<Content, Fake, Real> = {
		fake: [],
		real: [],
		scrap: [],
	};

	const addCollection = (deeperCollection: Collected<Content, Fake, Real>) => {
		collected.fake = collected.fake.concat(deeperCollection.fake);
		collected.real = collected.real.concat(deeperCollection.real);
		collected.scrap = collected.scrap.concat(deeperCollection.scrap);
	};

	if (buried instanceof Array) {
		const deeperCollections = buried.map((x: Buried<Content>) =>
			collectTreasure<Content, Fake, Real>(x, isFake, isReal)
		);
		deeperCollections.forEach(addCollection);
	} else {
		switch (buried.type) {
			case "catacomb":
				addCollection(
					collectTreasure<Content, Fake, Real>(buried.inside, isFake, isReal)
				);
				break;
			case "tunnels":
				addCollection(
					collectTreasure<Content, Fake, Real>(buried.entrances, isFake, isReal)
				);
				break;
			case "treasure":
				if (isReal(buried.content)) {
					collected.real.push(buried.content);
				} else if (isFake(buried.content)) {
					collected.fake.push(buried.content);
				} else {
					collected.scrap.push(buried.content);
				}
				break;
		}
	}

	return collected;
}
