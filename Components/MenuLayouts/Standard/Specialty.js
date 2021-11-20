import Item from "../../MenuComponents/Item";
import PriceSize from "../../MenuComponents/PriceSize";

//TODO: CSS (obviously) to organize the menu to look like menu print out. NOTE - split prices with css flex box

//!nearly identical to standard layout
const Specialty = ({ menu }) => {
	console.log(menu.priceList);
	return (
		<>
			<section>
				<span>
					{menu.priceList.length
						? menu.priceList.map((price, index) => {
								if (index % 2 == 0) {
									return <PriceSize price={price} key={`price${index}`} />;
								}
						  })
						: null}
				</span>
				<span>
					{menu.priceList.length
						? menu.priceList.map((price, index) => {
								if (index % 2 != 0) {
									return <PriceSize price={price} key={`price${index}`} />;
								}
						  })
						: null}
				</span>
			</section>
			<section>
				{menu.items.map((item, index) => {
					return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</>
	);
};

export default Specialty;
