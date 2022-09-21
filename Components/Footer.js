import styles from "../styles/Layout.module.css";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ footer }) => {
	const mapsSelector = () => {
		if (
			/* if we're on iOS, open in Apple Maps */
			navigator.platform.indexOf("iPhone") != -1 ||
			navigator.platform.indexOf("iPod") != -1 ||
			navigator.platform.indexOf("iPad") != -1
		)
			window.open(
				"maps://maps.google.com/maps/dir/47.2809472,-122.3786496/liftbridge+coffee+google/@47.2628241,-122.4320264,13z/data=!3m1!5s0x549055a01fc79a47:0xb38d9f206b079b39!4m10!4m9!1m1!4e1!1m5!1m1!1s0x549055a01fb2f443:0x31a6011414651863!2m2!1d-122.4373955!2d47.2531655!3e0"
			);
		/* else use Google */ else
			window.open(
				"https://maps.google.com/maps/dir/47.2809472,-122.3786496/liftbridge+coffee+google/@47.2628241,-122.4320264,13z/data=!3m1!5s0x549055a01fc79a47:0xb38d9f206b079b39!4m10!4m9!1m1!4e1!1m5!1m1!1s0x549055a01fb2f443:0x31a6011414651863!2m2!1d-122.4373955!2d47.2531655!3e0"
			);
	};
	return (
		<footer className={styles.footer}>
			{footer.items.map((item, index) => {
				return (
					<div className={styles.innerContainer} key={`container.${index}`}>
						<div
							className={styles.footerAddress}
							key={`line1.${index}`}
							onClick={() => mapsSelector()}
						>
							<span>{item.line1}</span>
							<span>{item.line2}</span>
							<span>{item.line3}</span>
						</div>
						<span className={styles.footerText} key={`line4.${index}`}>
							<a href={`tel:${item.line4}`}>{item.line4}</a>
						</span>

						<a
							href="https://www.instagram.com/liftbridgecoffee/?hl=en"
							className={styles.socials}
						>
							<FaInstagram /> <span>liftbridgecoffee</span>
						</a>

						<span className={styles.footerText} key={`line5.${index}`}>
							<a href={`mailto:${item.line5}`}>{item.line5}</a>
						</span>
					</div>
				);
			})}
		</footer>
	);
};

export default Footer;
