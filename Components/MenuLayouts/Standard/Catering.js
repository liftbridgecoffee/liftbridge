import Item from "../../MenuComponents/Item";

const Catering = ({ menu }) => {
	return (
		<>
			<section>
				{menu.items.map((item, index) => {
					return <Item item={item} key={`item${index}`} />;
				})}
			</section>
		</>
	);
};

export default Catering;
