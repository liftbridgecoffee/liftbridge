import Item from "../../MenuComponents/Item";
import PriceSize from "../../MenuComponents/PriceSize";
const Food = ({ menu }) => {
	return (
		<>
			<section>
				{menu.items.map((item, index) => {
					if (index % 2 == 0) return <Item item={item} key={`item${index}`} />;
				})}
			</section>
			<section>
				{menu.items.map((item, index) => {
					if (index % 2 != 0) return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</>
	);
};

export default Food;
