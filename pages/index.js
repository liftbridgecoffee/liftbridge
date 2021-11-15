import Head from "next/head";
import { getTestMenu } from "./api/sheets";

export default function Home({ menu }) {
	// const menuTitle = menu[0].row[0]
	console.log(menu);

	// console.log(menuTitle)

	return (
		<div>
			<Head>
				<title>
					Lift Bridge Coffee Tacoma | Home to Washington's best breakfast
					burrito
				</title>
				<meta
					name="description"
					content="The best coffee and breakfast burritos Tacoma has to offer. Located in the heart of Tacoma's booming downtown area, just accross from the iconic 11th street bridge."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charset="UTF-8" />
			</Head>
			{/* <h1>Welcome to Liftbridge</h1> */}
			<h1>{menu.title}</h1>

			{menu.items.map((item, index) => {
	
				return (
					<span key={`${index}${index}`}>
						<h3 key={`${index}${item.item * 2}`}>{item.item}</h3>
						{Array.isArray(item.description) && item.description.length > 1 ? (
							<span key={`${index * 2}${item.item + 2}u`}>
								{item.description[0]}
								<br></br>
								ADD ONS:<br></br>
								{item.description[1]}
							</span>
						) : (
							<span key={`${index * 2}${item.item + 2}u`}>
								{item.description}
							</span>
						)}
					</span>
				);
			})}
		</div>
	);
}

export async function getStaticProps(context) {
	const menu = await getTestMenu();
	return {
		props: {
			menu,
		},
		revalidate: 1, //seconds until re-render
	};
}
