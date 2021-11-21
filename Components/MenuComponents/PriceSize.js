import React from "react";
import menuStyles from "../../styles/MenuLayout.module.css";

const PriceSize = ({ price, side }) => {
	return (
		<>
			<span className={menuStyles.priceSize}>
				{price}
			</span>
		</>
	);
};

export default PriceSize;
