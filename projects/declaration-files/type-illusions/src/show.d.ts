// Declare your types here! ✨
export function isTrick(x: Section): x is Trick;
export function getAudienceMemberFor(x: {
	duration: number;
	title: string;
}): Promise<Audience>;
export function isVolunteerIllusion(x: Illusion): x is VolunteerIllusion;

export interface Trick {
	gimmick: string;
}

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

interface VolunteerIllusion extends Illusion {
	title: string;
	duration: number;
}

export interface Audience {
	name: string;
}

export interface Act {
	name: string;
	sections: Array<Section>;
	performer: string;
}

export type Section = Trick | Illusion;
