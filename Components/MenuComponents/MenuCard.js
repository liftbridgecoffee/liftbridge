import React from "react";
import Link from "next/link";
import Image from "next/image";
import bottledCover from "../../public/LiftBridgeCoffeeManifesto.png";
import seasonalCover from "../../public/bbcoffee.png";
import foodCover from "../../public/food-cover.jpg";
import cateringCover from "../../public/coffeeToGo.jpg";
import specialtyCover from "../../public/specialtyCover.jpg";
import blendedCover from "../../public/blendedCover.jpg";

import mCardStyle from "../../styles/MenuCard.module.css";

const MenuCard = ({ menu }) => {
	const title = menu.title.toUpperCase();
	let cover = bottledCover;

	switch (menu.sheetName) {
		case "specialty-drinks":
			cover = specialtyCover;
			break;
		case "food":
			cover = foodCover;
			break;
		case "seasonal":
			cover = seasonalCover;
			break;
		case "catering":
			cover = cateringCover;
			break;
		case "blended":
			cover = blendedCover;
			break;
		default:
			break;
	}

	return (
		<div className={mCardStyle.foundation}>
			<Link href={`/menu/${menu.sheetName}`} passHref>
				<a href="replace">
					<span className={mCardStyle.overlay}>
						<h2 className={mCardStyle.label}>{title}</h2>
					</span>
				</a>
			</Link>

			<Image
				className={mCardStyle.image}
				alt="Delicious Lift Bridge Coffee"
				quality={100}
				src={cover}
				//layout="fill"
				objectFit="cover"
				placeholder="blur"
			/>
		</div>
	);
};

export default MenuCard;
