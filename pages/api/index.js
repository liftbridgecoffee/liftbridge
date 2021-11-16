import {
	getBlendedMenu,
	getBottledMenu,
	getCateringMenu,
	getFoodMenu,
	getSeasonalDrinks,
	getSpecialtyMenu,
} from "./sheets";

export const makeAPICall = (sheet) => {
	switch (sheet) {
		case "specialty-drinks":
			return getSpecialtyMenu(sheet);
		case "seasonal":
			return getSeasonalDrinks(sheet);
		case "food":
			return getFoodMenu(sheet);
		case "blended":
			return getBlendedMenu(sheet);
		case "bottled":
			return getBottledMenu(sheet);
		case "catering":
			return getCateringMenu(sheet);
	}
};
