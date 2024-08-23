// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
export interface BasicLandmark {
	name: string;
}

export interface Fort extends BasicLandmark {
	type: "fort";
}

export interface Lake extends BasicLandmark {
	type: "lake";
	miles: number;
}

export interface Lighthouse extends BasicLandmark {
	type: "lighthouse";
	lit: number;
	height: number;
}

export interface Mountain extends BasicLandmark {
	type: "mountain";
	height: number;
}

export interface Park extends BasicLandmark {
	type: "park";
	acres: number;
}

export interface River extends BasicLandmark {
	type: "river";
	length: number;
	depth: number;
}

export interface Waterfall extends BasicLandmark {
	type: "waterfall";
	height: number;
}

export type Landmark =
	| Fort
	| Lake
	| Lighthouse
	| Mountain
	| Park
	| River
	| Waterfall;

export function describeLandmark(landmark: Landmark): string {
	const description: string[] = [
		`${landmark.name} is a ${landmark.type} in Upstate New York.`,
	];
	let secondDescription: string = "";
	switch (landmark.type) {
		case "fort":
			return description[0];
		case "lake":
			secondDescription = `It covers ${landmark.miles} square miles of water.`;
			break;
		case "lighthouse":
			secondDescription = `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "mountain":
			secondDescription = `Its peak is ${landmark.height} feet high.`;
			break;
		case "park":
			secondDescription = `It covers ${landmark.acres} square acres.`;
			break;
		case "river":
			secondDescription = `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			secondDescription = `It is ${landmark.height} feet high.`;
			break;
	}
	description.push(secondDescription);
	return description.join("\n");
}
