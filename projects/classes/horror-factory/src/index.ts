// Write your classes here! ✨
// You'll need to export them so the tests can run them.
export interface ConsumedHorror {
	name: string;
	evil: boolean;
	power: number;
}

interface HorrorSettings {
	name: string;
	getPowerFrom: (consumed: ConsumedHorror) => number;
	isEvil: () => boolean;
}

export class Horror {
	readonly name: string;
	#consumedHorrors: Array<ConsumedHorror> = [];
	protected getPowerFrom: (oppoent: ConsumedHorror) => number;
	readonly isEvil: () => boolean;

	public constructor({ name, getPowerFrom, isEvil }: HorrorSettings) {
		this.name = name;
		this.getPowerFrom = getPowerFrom;
		this.isEvil = isEvil;
	}

	public doBattle(oppoent: Horror) {
		if (this.getPower() >= oppoent.getPower()) {
			this.#consumedHorrors.push({
				name: oppoent.name,
				evil: oppoent.isEvil(),
				power: oppoent.getPower(),
			});
		}
	}

	public getPower(): number {
		return (
			this.#consumedHorrors.length +
			this.#consumedHorrors.reduce(
				(sumPower: number, horror: ConsumedHorror) =>
					sumPower + this.getPowerFrom(horror),
				0
			)
		);
	}
}

const demonSettings: HorrorSettings = {
	name: "Demon",
	getPowerFrom: (consumed: ConsumedHorror) => {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	},
	isEvil: () => true,
};

export function createDemon(): Horror {
	return new Horror(demonSettings);
}

export function createSorcerer(name: string, evil: boolean): Horror {
	const sorcererSettings: HorrorSettings = {
		name: name,
		getPowerFrom: (consumed: ConsumedHorror) => {
			return consumed.evil === evil ? consumed.power * 2 : consumed.power;
		},
		isEvil: () => evil,
	};
	return new Horror(sorcererSettings);
}
