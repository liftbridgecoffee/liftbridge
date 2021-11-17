import { google } from "googleapis";

//! Get the "Catering" menu
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
				title: rows[0][0],
				items: rows.slice(2).map((row) => {
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
			return {
				title: rows[0][0],
				items: rows.slice(2).map((row) => {
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
					return { item, description, addons };
				}),
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
				title: rows[0][0],
				items: rows.slice(2).map((row) => {
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

// //!Get blended Menu
// export const getBlendedMenu = async (sheet) => {
// 	try {
// 		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// 		const jwt = new google.auth.JWT(
// 			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
// 			null,
// 			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
// 			target
// 		);

// 		const sheets = google.sheets({ version: "v4", auth: jwt });
// 		const response = await sheets.spreadsheets.values.get({
// 			spreadsheetId: process.env.SPREADSHEET_ID,
// 			range: sheet, // sheet name
// 		});

// 		const rows = response.data.values;

// 		if (rows.length) {
// 			return {
// 				title: rows[0][0],
// 				items: rows.slice(2).map((row) => {
// 					let newRow = row.map((column) => {
// 						let newColumn = column;
// 						if (newColumn.includes("::")) {
// 							newColumn = column.split("::").join("\n");
// 						}
// 						if (newColumn.includes("null")) {
// 							newColumn = "";
// 						}
// 						return newColumn;
// 					});
// 					let item = newRow[0];
// 					let description = newRow[1];
// 					let addons = newRow[2];
// 					console.log({ item, description, addons });
// 					return { item, description, addons };
// 				}),
// 			};
// 		}
// 	} catch (err) {
// 		return err;
// 	}
// };

// //!Get bottled Menu
// export const getBottledMenu = async (sheet) => {
// 	try {
// 		const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// 		const jwt = new google.auth.JWT(
// 			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
// 			null,
// 			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
// 			target
// 		);

// 		const sheets = google.sheets({ version: "v4", auth: jwt });
// 		const response = await sheets.spreadsheets.values.get({
// 			spreadsheetId: process.env.SPREADSHEET_ID,
// 			range: sheet, // sheet name
// 		});

// 		const rows = response.data.values;

// 		if (rows.length) {
// 			return {
// 				title: rows[0][0],
// 				items: rows.slice(2).map((row) => {
// 					let newRow = row.map((column) => {
// 						let newColumn = column;
// 						if (newColumn.includes("::")) {
// 							newColumn = column.split("::").join("\n");
// 						}
// 						if (newColumn.includes("null")) {
// 							newColumn = "";
// 						}
// 						return newColumn;
// 					});
// 					let item = newRow[0];
// 					let description = newRow[1];
// 					let addons = newRow[2];
// 					console.log({ item, description, addons });
// 					return { item, description, addons };
// 				}),
// 			};
// 		}
// 	} catch (err) {
// 		return err;
// 	}
// };
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
				title: rows[0][0],
				items: rows.slice(2).map((row) => {
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
