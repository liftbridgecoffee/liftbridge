import aboutStyle from "../styles/AboutPage.module.css";
import NonMenuLayout from "../Components/NonMenuLayout";
import { useEffect } from "react";
import { makeAPICall } from "./api";
import { FaInstagram } from "react-icons/fa";

const About = ({ footer, about }) => {
	useEffect(() => {
		let main = document.querySelector("main");
		main.style.minHeight = "1vh";
		return () => {
			main.style.minHeight = "100vh";
		};
	}, []);

	const mapsSelector = () => {
		if (
			/* if we're on iOS, open in Apple Maps */
			navigator.platform.indexOf("iPhone") != -1 ||
			navigator.platform.indexOf("iPod") != -1 ||
			navigator.platform.indexOf("iPad") != -1
		)
			window.open(
				"http://maps.apple.com/?q=Spigot+Design/dir/47.2809472,-122.3786496/liftbridge+coffee+google/@47.2628241,-122.4320264,13z/data=!3m1!5s0x549055a01fc79a47:0xb38d9f206b079b39!4m10!4m9!1m1!4e1!1m5!1m1!1s0x549055a01fb2f443:0x31a6011414651863!2m2!1d-122.4373955!2d47.2531655!3e0"
			);
		/* else use Google */ else
			window.open(
				"https://maps.google.com/maps/dir/47.2809472,-122.3786496/liftbridge+coffee+google/@47.2628241,-122.4320264,13z/data=!3m1!5s0x549055a01fc79a47:0xb38d9f206b079b39!4m10!4m9!1m1!4e1!1m5!1m1!1s0x549055a01fb2f443:0x31a6011414651863!2m2!1d-122.4373955!2d47.2531655!3e0"
			);
	};

	return (
		<>
			<NonMenuLayout footer={footer}>
				<section className={aboutStyle.mainContainer}>
					{about.items.map((item, index) => {
						if (index == 1) {
							return (
								<div key={`contact${index}`}>
									<h1 key={`title${index}`}>{item.line1} </h1>
									<p key={`p${index}`}>{item.line2}</p>
									<div
										key={`cs${index}`}
										className={aboutStyle.addressContainer}
										onClick={() => mapsSelector()}
									>
										<span key={`a1${index}`}>{item.line3}</span>
										<span key={`a2${index}`}>{item.line4}</span>
										<span key={`a3${index}`}>{item.line5}</span>
									</div>
									<div
										className={aboutStyle.contactContainer}
										key={`cc1${index}`}
									>
										<span
											className={aboutStyle.contactLine}
											key={`ci1${index}`}
										>
											<a key={`ciphone1${index}`} href={`tel:${item.line6}`}>
												{item.line6}
											</a>
										</span>
										<span
											className={aboutStyle.contactLine}
											key={`ci2${index}`}
										>
											<a key={`ciemail1${index}`} href={`mailto:${item.line7}`}>
												{item.line7}
											</a>
										</span>
									</div>
								</div>
							);
						} else {
							return (
								<div key={`about${index}`}>
									<h1 key={`title${index}`}>{item.line1}</h1>
									<a
										href="https://www.instagram.com/liftbridgecoffee/?hl=en"
										className={aboutStyle.socials}
									>
										<FaInstagram /> <span>liftbridgecoffee</span>
									</a>
									<p key={`p1${index}`}>{item.line2}</p>
									<p key={`p2${index}`}>{item.line3}</p>
									<p key={`p3${index}`}>{item.line4}</p>
									<p key={`p4${index}`}>{item.line5}</p>
									<p key={`p5${index}`}>{item.line6}</p>
									<p key={`p6${index}`}>{item.line7}</p>
								</div>
							);
						}
					})}
				</section>
			</NonMenuLayout>
		</>
	);
};

export async function getStaticProps() {
	const footer = await makeAPICall("footer");
	const about = await makeAPICall("about");
	return {
		props: {
			footer,
			about,
		},
		revalidate: 1, //seconds until re-render
	};
}
export default About;
