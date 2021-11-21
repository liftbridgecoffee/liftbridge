import Item from "../../MenuComponents/Item";
// import PriceSize from "../../MenuComponents/PriceSize";
import foodStyles from "../../../styles/FoodMenu.module.css";

const Food = ({ menu }) => {
	return (
		<div className={foodStyles.columnContainer}>
			<section className={foodStyles.columnLeft}>
				{menu.items.map((item, index) => {
					if (index % 2 == 0) return <Item item={item} key={`item${index}`} />;
				})}
			</section>
			<section className={foodStyles.columnRight}>
				{menu.items.map((item, index) => {
					if (index % 2 != 0) return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</div>
	);
};

export default Food;
