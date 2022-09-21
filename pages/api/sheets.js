import { google } from "googleapis";

//! Get the "Catering" menu

export const getMenuNames = async () => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: "Menu-Names",
		});

		const rows = response.data.values;

		return {
			menus: rows.map((row) => {
				let sheetName = row[0];
				let title = row[1];
				return { sheetName, title };
			}),
		};

		// if (rows.length) {
		// 	return {
		// 		pageDescription: rows[0][1],
		// 		title: rows[1][0],
		// 		items: rows.slice(3).map((row) => {
		// 			let newRow = row.map((column) => {
		// 				let newColumn = column;
		// 				if (newColumn.includes("::")) {
		// 					newColumn = column.split("::").join("\n");
		// 				}
		// 				if (newColumn.includes("null")) {
		// 					newColumn = "";
		// 				}
		// 				return newColumn;
		// 			});
		// 			let item = newRow[0];
		// 			let description = newRow[1];
		// 			let addons = newRow[2];
		// 			let aside = newRow[3];
		// 			return { item, description, addons, aside };
		// 		}),
		// 	};
		// }
	} catch (err) {
		return err;
	}
};

export const getMenuNamesMock = () => {
	return {
		menus: [
			{ sheetName: "specialty-drinks", title: "specialty drinks" },
			{ sheetName: "food", title: "food" },
			{ sheetName: "seasonal", title: "seasonal" },
			{ sheetName: "catering", title: "catering" },
			{ sheetName: "blended", title: "blended" },
		],
	};
};

export const getCateringMenu = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let item = newRow[0];
					let description = newRow[1];
					let addons = newRow[2];
					let aside = newRow[3];
					return { item, description, addons, aside };
				}),
			};
		}
	} catch (err) {
		return err;
	}
};

//!Get food Menu
export const getFoodMenu = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			let priceList = [];
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let item = newRow[0];
					let description = newRow[1];
					let addons = newRow[2];
					if (!!newRow[3]) priceList.push(newRow[3]);
					return { item, description, addons };
				}),
				priceList,
			};
		}
	} catch (err) {
		return err;
	}
};

//!Get specialty Menu
export const getSpecialtyMenu = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			let priceList = [];
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn == "null") {
							newColumn = "";
						}
						return newColumn;
					});
					let item = newRow[0];
					let description = newRow[1];
					let addons = newRow[2];
					if (!!newRow[3]) priceList.push(newRow[3]);
					return { item, description, addons };
				}),
				priceList,
			};
		}
	} catch (err) {
		return err;
	}
};

// //!Get blended Menu
export const getBlendedMenu = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;
		if (rows.length) {
			let pageDescription = rows[0][1];
			let title = rows[1][0];
			let frappe = { prices: [], addons: [], items: [] };
			let smoothie = { prices: [], addons: [], items: [] };

			rows.slice(3).map((row) => {
				let newRow = row.map((column) => {
					let newColumn = column;
					if (newColumn.includes("::")) {
						newColumn = column.split("::").join("\n");
					}
					if (newColumn.includes("null")) {
						newColumn = "";
					}
					return newColumn;
				});
				if (newRow[0]) frappe.items.push(newRow[0]);
				if (newRow[1]) frappe.addons.push(newRow[1]);
				if (newRow[2]) frappe.prices.push(newRow[2]);
				if (newRow[3]) smoothie.items.push(newRow[3]);
				if (newRow[4]) smoothie.addons.push(newRow[4]);
				if (newRow[5]) smoothie.prices.push(newRow[5]);
			});
			return {
				pageDescription,
				title,
				smoothie,
				frappe,
			};
		}
	} catch (err) {
		return err;
	}
};

//!Get bottled Menu
export const getBottledMenu = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let item = newRow[0];
					let description = newRow[1];
					return { item, description };
				}),
			};
		}
	} catch (err) {
		return err;
	}
};
// //!Get seasonal Menu
export const getSeasonalDrinks = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			let priceList = [];
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let item = newRow[0];
					let description = newRow[1];
					if (!!newRow[2]) priceList.push(newRow[2]);
					return { item, description };
				}),
				priceList,
			};
		}
	} catch (err) {
		return err;
	}
};

export const getFooter = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let line1 = newRow[0];
					let line2 = newRow[1];
					let line3 = newRow[2];
					let line4 = newRow[3];
					let line5 = newRow[4];
					return { line1, line2, line3, line4, line5 };
				}),
			};
		}
	} catch (err) {
		return err;
	}
};
export const getAbout = async (sheet) => {
	try {
		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			target
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: sheet, // sheet name
		});

		const rows = response.data.values;

		if (rows.length) {
			return {
				pageDescription: rows[0][1],
				title: rows[1][0],
				items: rows.slice(3).map((row) => {
					let newRow = row.map((column) => {
						let newColumn = column;
						if (newColumn.includes("::")) {
							newColumn = column.split("::").join("\n");
						}
						if (newColumn.includes("null")) {
							newColumn = "";
						}
						return newColumn;
					});
					let line1 = newRow[0];
					let line2 = newRow[1];
					let line3 = newRow[2];
					let line4 = newRow[3];
					let line5 = newRow[4];
					let line6 = newRow[5];
					let line7 = newRow[6];
					return { line1, line2, line3, line4, line5, line6, line7 };
				}),
			};
		}
	} catch (err) {
		return err;
	}
};
