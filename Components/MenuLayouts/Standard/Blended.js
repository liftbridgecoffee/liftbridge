import PriceSize from "../../MenuComponents/PriceSize";
import ItemBlended from "../../MenuComponents/ItemBlended";

const Blended = ({ menu }) => {
	console.log(menu);
	return (
		<>
			<section>
				<h2>Frappe</h2>
				<div>
					{menu.frappe.prices.map((p, index) => {
						return <PriceSize key={`${index}_price`} price={p} />;
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
			<section>
				<h2>Smoothie</h2>
				<div>
					{menu.smoothie.prices.map((p, index) => {
						return <PriceSize key={`${index}_price`} price={p} />;
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
		</>
	);
};

export default Blended;
