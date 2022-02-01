import React from "react";
import Link from "next/link";

const MenuCard = ({ menu }) => {
	console.log(menu);
	return (
		<div>
			<h1>{menu.title}</h1>
		</div>
	);
};

export default MenuCard;
