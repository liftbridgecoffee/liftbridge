//! Non Menu Layout(menu-index and about)
import Image from "next/image";
import nonMLStyles from "../styles/NonMenuLayout.module.css";
import longEspresso from "../public/longEspresso.jpg";
import longlb from "../public/longlb.jpg";
import lbwhite from "../public/lbwhite.png";
import thstbridgedark from "../public/thstbridgedark.png";

const NonMenuLayout = ({ children, name }) => {
	let topPhoto = longEspresso;
	let bottomPhoto = thstbridgedark;
	// let title = "Menu List";

	switch (name) {
		case "menu":
			break;
		case "about":
			topPhoto = longlb;
			title = "About";
			break;
		default:
			break;
	}
	return (
		<>
			<header className={nonMLStyles.header}>
				<div className={nonMLStyles.headerImageContainer}>
					<Image
						alt="Espresso coffee"
						quality={100}
						src={topPhoto}
						placeholder="blur"
						layout="fill"
						objectFit="cover"
						priority
					/>
					<span className={nonMLStyles.imageOverlayTop}>
						<span className={nonMLStyles.lblogoframe}>
							
							<Image alt="Lift Bridge logo" quality={100} src={lbwhite} className={nonMLStyles.lblogo}/>
							
						</span>
					</span>
				</div>
			</header>
			<div className={nonMLStyles.baseContainer}>
				<div className={nonMLStyles.innerBaseContainer}>
					<>
						{/* <h1 className={nonMLStyles.h1}>{title}</h1> */}
						<>{children}</>
					</>
				</div>
			</div>
			<div className={nonMLStyles.bottom}>
				<Image
					className={nonMLStyles.image}
					alt="Delicious Lift Bridge Coffee"
					quality={100}
					src={bottomPhoto}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
				<span className={nonMLStyles.imageOverlay}></span>
			</div>
		</>
	);
};

export default NonMenuLayout;
