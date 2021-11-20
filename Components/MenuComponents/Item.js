const Item = ({ item }) => {
	return (
		<article>
			{item.item ? <h2>{item.item}</h2> : null}
			{item.description ? <p>{item.description}</p> : null}
			{item.addons ? <p>{item.addons}</p> : null}
		</article>
	);
};

export default Item;
