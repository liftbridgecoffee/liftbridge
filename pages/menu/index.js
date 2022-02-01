import MenuCard from "../../Components/MenuComponents/MenuCard";
import { makeAPICall } from "../api";

const menu = ({ menuTitles }) => {
	return (
		<div>
			<>
				{menuTitles.menus.map((menu, index) => {
					return <MenuCard key={`${menu.title}MenuCard${index}`} menu={menu} />;
				})}
			</>
		</div>
	);
};

export async function getStaticProps() {
	const menuTitles = await makeAPICall("names");
	return {
		props: {
			menuTitles,
		},
	};
}

export default menu;
