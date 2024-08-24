// Write your classes here! ✨
// You'll need to export them so the tests can run them.
export interface ConsumedHorror {
	name: string;
	evil: boolean;
	power: number;
}

export class Horror {
	readonly name: string;
	#consumedHorrors: Array<ConsumedHorror> = [];
	protected getPowerFrom: (oppoent: ConsumedHorror) => number;
	readonly isEvil: () => boolean;

	public constructor(
		name: string,
		getPowerFrom: (x: ConsumedHorror) => number,
		isEvil: () => boolean
	) {
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

export function createDemon(): Horror {
	const demonGetPower = function (x: ConsumedHorror): number {
		return x.evil ? x.power / 2 : x.power * 2;
	};
	return new Horror("Demon", demonGetPower, () => true);
}

export function createSorcerer(name: string, evil: boolean): Horror {
	return new Horror(
		name,
		(x: ConsumedHorror): number => {
			return x.evil === evil ? x.power * 2 : x.power;
		},
		() => evil
	);
}
