import React from "react";
import Link from "next/link";

const MenuCard = ({ menu }) => {
	console.log(menu);
	return (
		<div>
			<Link href={`/menu/${menu.sheetName}`}>
				<h1>{menu.title}</h1>
			</Link>
		</div>
	);
};

export default MenuCard;
