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
					// console.log({ item, description });
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
