import { google } from "googleapis";
export async function getTestMenu() {
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
			range: "Example", // sheet name
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
					console.log({ item, description, addons });
					return { item, description, addons };
				}),
			};
		}
	} catch (err) {
		console.log(err);
	}
	return [];
}
