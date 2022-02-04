import React from "react";
import Link from "next/link";
import Image from "next/image";
import can from "../../public/LiftBridgeCoffeeManifesto.png"

import mCardStyle from "../../styles/MenuCard.module.css";

const MenuCard = ({ menu }) => {

	const title = menu.title.toUpperCase()

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
					src={can}
					//layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
		</div>
	);
};

export default MenuCard;
