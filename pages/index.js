import Head from "next/head";

export default function Home({}) {
	return (
		<div>
			<Head>
				<title>
					Lift Bridge Coffee Tacoma | Home to Washingtons best breakfast burrito
				</title>
				<meta
					name="description"
					content="The best coffee and breakfast burritos Tacoma has to offer. Located in the heart of Tacoma's booming downtown area, just accross from the iconic 11th street bridge."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charset="UTF-8" />
			</Head>
			<h1>Welcome to Liftbridge</h1>
		</div>
	);
}

// export async function getStaticProps(context) {
// 	const menu = await getTestMenu();
// 	return {
// 		props: {
// 			menu,
// 		},
// 		revalidate: 1, //seconds until re-render
// 	};
// }
