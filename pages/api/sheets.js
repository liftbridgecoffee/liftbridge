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

		console.log(rows);

		if (rows.length) {
			return {
				title: rows[0][0],
				items: rows.slice(2).map((item) => {
					if (item[1].includes("::")) {
						item[1] = item[1].split("::").join("\n");
					}
					if (item[1].includes("null")) {
						item[1] = "";
					}
					if (item[1].includes("ADD ONS:")) {
						// item[1] = item[1].split("ADD ONS: ").join("\nADD ONS:\n");
						item[1] = item[1].split("ADD ONS: ");
					}
					return { item: item[0], description: item[1] };
				}),
			};
		}
	} catch (err) {
		console.log(err);
	}
	return [];
}
