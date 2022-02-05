import PriceSize from "../../MenuComponents/PriceSize";
import ItemBlended from "../../MenuComponents/ItemBlended";

import MenuStyles from "../../../styles/MenuLayout.module.css";

const Blended = ({ menu }) => {
	console.log(menu);
	return (
		<div className={MenuStyles.BlendedContainer}>
			<section className={MenuStyles.BlendedSubContainer}>
				<h2 className={MenuStyles.SubTitle}>Frappe</h2>
				<div className={MenuStyles.BlendedPrice}>
					{menu.frappe.prices.map((p, index) => {
						return (
							<PriceSize key={`${index}_price`} price={p} type={"Blended"} />
						);
					})}
				</div>
				<div>
					{menu.frappe.items.map((item, index) => {
						return (
							<ItemBlended key={`${index}_item`} item={item} type={"item"} />
						);
					})}
				</div>
				<div>
					{menu.frappe.addons.map((item, index) => {
						return (
							<ItemBlended key={`${index}_item`} item={item} type={"addon"} />
						);
					})}
				</div>
			</section>
			<section className={MenuStyles.BlendedSubContainer}>
				<h2 className={MenuStyles.SubTitle}>Smoothie</h2>
				<div className={MenuStyles.BlendedPrice}>
						{menu.smoothie.prices.map((p, index) => {
						return (
							<PriceSize key={`${index}_price`} price={p} type={"Blended"} />
						);
					})}
				</div>
				<div>
					{menu.smoothie.items.map((item, index) => {
						return (
							<ItemBlended key={`${index}_item`} item={item} type={"item"} />
						);
					})}
				</div>
				<div>
					{menu.smoothie.addons.map((item, index) => {
						return (
							<ItemBlended key={`${index}_item`} item={item} type={"addon"} />
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Blended;
