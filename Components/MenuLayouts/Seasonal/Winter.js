import Item from "../../MenuComponents/Item";
const Winter = ({ menu }) => {
	console.log(menu);
	return (
		<div>
			{menu.items.map((item, index) => {
				return <Item item={item} key={`${index}_item`} />;
			})}
		</div>
	);
};

export default Winter;
