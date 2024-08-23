// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
export interface Restaurant {
	city: string;
	name: string;
}

export interface GroupedRes {
	[i: string]: Array<string>;
}

export function groupRestaurants(restaurants: Array<Restaurant>): GroupedRes {
	let groupedRes: GroupedRes = {};
	for (const restaurant of restaurants) {
		if (restaurant.city in groupedRes) {
			groupedRes[restaurant.city].push(restaurant.name);
		} else {
			groupedRes[restaurant.city] = [restaurant.name];
		}
	}
	return groupedRes;
}
