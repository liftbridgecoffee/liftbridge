import menuStyles from "../../styles/MenuLayout.module.css";

const ItemBlended = ({ item, type }) => {
	return (
		<>
			{type == "item" ? (
				<article className={menuStyles.menuLayout}>
					<h2>
						<span>{item}</span>
					</h2>
				</article>
			) : (
				<article className={menuStyles.menuLayout}>
					<p className={menuStyles.blendedAddon}>
						<span>{item}</span>
					</p>
				</article>
			)}
		</>
	);
};

export default ItemBlended;
