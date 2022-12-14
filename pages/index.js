import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import { useEffect } from "react/cjs/react.production.min";

import { makeAPICall } from "./api";
import { useEffect } from "react";
import cover from "../public/coverMain.jpg";
import vb from "../public/LargeVeggieBurrito.jpg";
import homeStyle from "../styles/HomeStyle.module.css";
import generalStyle from "../styles/Layout.module.css";
import lBA from "../public/liftBridgeAbby.png";
import thstbridgedark from "../public/thstbridgedark.png";
import nonMLStyles from "../styles/NonMenuLayout.module.css";
import NonMenuLayout from "../Components/NonMenuLayout";
import mCardStyle from "../styles/MenuCard.module.css";
import MenuPageHead from "../Components/MenuPageHead";

export default function Home({ footer }) {
	useEffect(() => {
		let main = document.querySelector("main");
		main.style.minHeight = "1vh";
		return () => {
			main.style.minHeight = "100vh";
		};
	}, []);
	return (
		<>
		<MenuPageHead menu={{ title: "", description: "Liftbridge Coffee - Great Tacoma Beans" }} />
			<NonMenuLayout footer={footer}>
				{/* <section className={mCardStyle.LargeOuterContainer}> */}
				<div className={homeStyle.contentHolder}>
					<Image
						src={lBA}
						className={homeStyle.image}
						alt="Lift Bridge Coffee"
						quality={100}
						objectFit="cover"
					/>
					<div className={homeStyle.centerContentContainer} id="dude">
						<span className={homeStyle.option}>
							<h1 className={homeStyle.title}>
								<Link href="menu">Menus</Link>
							</h1>
						</span>
						<span className={homeStyle.option}>
							<h1 className={homeStyle.title}>
								<Link href="about">Who We Are</Link>
							</h1>
						</span>
					</div>
				</div>
				{/* </section> */}
			</NonMenuLayout>
		</>
	);
}

export async function getStaticProps() {
	const footer = await makeAPICall("footer");
	return {
		props: {
			footer,
		},
		revalidate: 1, //seconds until re-render
	};
}

// <Head>
// <title>
// 	Lift Bridge Coffee Tacoma | Home to Washingtons best breakfast burrito
// </title>
// <meta
// 	name="description"
// 	content="The best coffee and breakfast burritos Tacoma has to offer. Located in the heart of Tacoma's booming downtown area, just accross from the iconic 11th street bridge."
// />
// <meta name="viewport" content="initial-scale=1.0, width=device-width" />
// <meta charSet="UTF-8" />
// </Head>

{
	/* <div className={homeStyle.baseContainer}> */
}
{
	/* <div className={homeStyle.imageHolder}> */
}
{
	/* <Image
						src={vb}
						className={homeStyle.image}
						alt="Lift Bridge Coffee"
						quality={100}
						objectFit="cover"
					/> */
}
{
	/* </div> */
}
{
	/* </div> */
}
{
	/* <Image src={lBA} /> */
}
