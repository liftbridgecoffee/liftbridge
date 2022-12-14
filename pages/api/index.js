import {
	getBlendedMenu,
	getBottledMenu,
	getCateringMenu,
	getFoodMenu,
	getSeasonalDrinks,
	getSpecialtyMenu,
	getMenuNames,
	getFooter,
	getAbout,
	// getMenuNamesMock,
} from "./sheets";

export const makeAPICall = (sheet) => {
	switch (sheet) {
		case "names":
			// return getMenuNamesMock();
			return getMenuNames();
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
		case "footer":
			return getFooter(sheet);
		case "about":
			return getAbout(sheet);
	}
};
