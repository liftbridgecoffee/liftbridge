import menuStyles from "../../styles/MenuLayout.module.css";

const Item = ({ item }) => {
	return (
		<article className={menuStyles.menuLayout}>
			{item.item ? (
				<h2>
					<span>{item.item}</span>
				</h2>
			) : null}
			{item.aside ? (
				<p className={menuStyles.aside}>
					<span className={menuStyles.aside}>{item.aside}</span>
				</p>
			) : null}
			{item.description ? (
				<p>
					<span>{item.description}</span>
				</p>
			) : null}
			{item.addons ? (
				<>
					<span className={menuStyles.addonsLabel}>ADD ONS:</span>
					<p>
						<span>
							{/* <br></br> */}
							{item.addons}
						</span>
					</p>
				</>
			) : null}
		</article>
	);
};

export default Item;
