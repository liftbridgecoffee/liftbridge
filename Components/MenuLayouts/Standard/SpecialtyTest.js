import Item from "../../MenuComponents/Item";
import PriceSize from "../../MenuComponents/PriceSize";
import menuStyles from "../../../styles/MenuLayout.module.css";
import { useState } from "react";

const Specialty = ({ menu }) => {
	let pList = menu.priceList;

	const [itemList, setItemList] = useState([...menu.items]);

	const [initialPrice1, setInitialPrice1] = useState({
		price: pList[0],
		index: 0,
	});
	const [initialPrice2, setInitialPrice2] = useState({
		price: pList[1],
		index: 1,
	});
	const [initialPrice3, setInitialPrice3] = useState({
		price: pList[2],
		index: 2,
	});
	const [initialPrice4, setInitialPrice4] = useState({
		price: pList[3],
		index: 3,
	});

	return (
		<span className={menuStyles.innerMenuColumn}>
			
			<section className={menuStyles.priceListContainer}>
				<p className={menuStyles.leftPrice}>
					<PriceSize
						price={initialPrice1.price}
						key={`price${initialPrice1.index}`}
						side={"left"}
					/>
					<PriceSize
						price={initialPrice2.price}
						key={`price${initialPrice2.index}`}
						side={"left"}
					/>
				</p>
				<p className={menuStyles.rightPrice}>
					<PriceSize
						price={initialPrice3.price}
						key={`price${initialPrice3.index}`}
						side={"right"}
					/>
					<PriceSize
						price={initialPrice4.price}
						key={`price${initialPrice4.index}`}
						side={"right"}
					/>
				</p>
			</section>
			<section>
				{itemList.map((item, index) => {
					return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</span>
	);
};

export default Specialty;
