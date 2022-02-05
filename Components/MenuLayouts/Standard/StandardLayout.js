//!Base Menu Layout
import Image from "next/image";
import menuStyles from "../../../styles/MenuLayout.module.css";
import menuFoot from "../../../public/menuBottom1.jpg";
import longEspresso from "../../../public/longEspresso.jpg";
import longlb from "../../../public/longlb.jpg";
import lbwhite from "../../../public/lbwhite.png";
import thstbridgedark from "../../../public/thstbridgedark.png";
import BaconBurrito from "../../../public/BaconBurrito.png";
import bottle from "../../../public/LiftBridgeCoffeeManifesto.png";
import bbcoffee from "../../../public/bbcoffee1.png";
import manifestos from "../../../public/manifestospng.png";

const StandardLayout = ({ menu, children, name }) => {
	let topPhoto = longEspresso;
	let bottomPhoto = menuFoot;
	switch (name) {
		case "specialty-drinks":
			break;
		case "food":
			topPhoto = longlb;
			bottomPhoto = BaconBurrito;
			break;
		case "bottled":
			topPhoto = bbcoffee;
			break;
		case "catering":
			bottomPhoto = thstbridgedark;
			break;
		default:
			break;
	}
	return (
		<>
			<header className={menuStyles.menuHeader}>
				<div className={menuStyles.headerImageContainer}>
					<Image
						
						alt="Espresso coffee"
						quality={100}
						src={topPhoto}
						placeholder="blur"
						layout="fill"
						objectFit="cover"
						priority
					/>
					<span className={menuStyles.menuImageOverlayTop}>
						<span className={menuStyles.lblogoframe}>
							
							<Image alt="Lift Bridge logo" quality={100} src={lbwhite} className={menuStyles.lblogo}/>
							
						</span>
					</span>
				</div>
			</header>
			<div className={menuStyles.baseContainer}>
				<div className={menuStyles.innerBaseContainer}>
					<h1 className={menuStyles.h1}>{menu.title}</h1>
					<section>{children}</section>
				</div>
			</div>
			<div className={menuStyles.menuBottom}>
				<Image
					className={menuStyles.image}
					alt="Delicious Lift Bridge Coffee"
					quality={100}
					src={bottomPhoto}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
				<span className={menuStyles.menuImageOverlay}></span>
			</div>
		</>
	);
};

export default StandardLayout;
