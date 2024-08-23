// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
export interface Coordinate {
	north: CoorArray;
	west: CoorArray;
}

export type CoorArray = [number, number, number];

export interface City {
	name: string;
	coordinates: Coordinate;
	catchphrase?: string;
}

function showCoordinate(coor: Array<number>): string {
	const mark: string[] = ["°", "'", '"'];
	let coorTexts: string = "";
	for (let i = 0; i < mark.length; i++) {
		coorTexts += coor[i].toString().padStart(2, "0") + mark[i];
	}
	return coorTexts;
}

export function describeCity(city: City): string {
	let description: string[] = [`${city.name}, New York`];
	if (city.catchphrase) {
		description.push(`* "${city.catchphrase}"`);
	}
	description.push(
		`* Located at ${showCoordinate(city.coordinates.north)}N ${showCoordinate(
			city.coordinates.west
		)}W`
	);
	return description.join("\n");
}
