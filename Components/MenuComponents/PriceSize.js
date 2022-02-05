import React from "react";
import menuStyles from "../../styles/MenuLayout.module.css";

const PriceSize = ({ price, type }) => {
	return (
		<>
			{type == "Standard" ? (
				<span className={menuStyles.priceSize}>{price}</span>
			) : (
				<span className={menuStyles.priceSizeBlended}>{price}</span>
			)}
		</>
	);
};

export default PriceSize;
