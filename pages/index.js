import head, { defaultHead } from "next/head";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Lift Bridge Coffee Tacoma - Home of Washington's best breakfast
					burrito
				</title>
				<meta
					name="description"
					content="Great coffee in the heart of tacoma."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="keywords" content="coffee, tacoma, washington" />
				<meta charset="UTF-8" />
			</Head>
			<h1>Welcome to Liftbridge</h1>
		</div>
	);
}
