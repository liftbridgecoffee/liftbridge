import Item from "../../MenuComponents/Item";
import PriceSize from "../../MenuComponents/PriceSize";
import menuStyles from "../../../styles/MenuLayout.module.css";

const Specialty = ({ menu }) => {
	return (
		<span className={menuStyles.innerMenuColumn}>
			<section className={menuStyles.priceListContainer}>
				<p className={menuStyles.leftPrice}>
					{menu.priceList.length
						? menu.priceList.map((price, index) => {
								if (index % 2 == 0) {
									return (
										<PriceSize
											price={price}
											key={`price${index}`}
											side={"left"}
										/>
									);
								}
						  })
						: null}
				</p>
				<p className={menuStyles.rightPrice}>
					{menu.priceList.length
						? menu.priceList.map((price, index) => {
								if (index % 2 != 0) {
									return (
										<PriceSize
											price={price}
											key={`price${index}`}
											side={"right"}
										/>
									);
								}
						  })
						: null}
				</p>
			</section>
			<section>
				{menu.items.map((item, index) => {
					return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</span>
	);
};

export default Specialty;
