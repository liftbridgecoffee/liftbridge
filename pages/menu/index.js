import MenuCard from "../../Components/MenuComponents/MenuCard";
import { makeAPICall } from "../api";
import NonMenuLayout from "../../Components/NonMenuLayout";

//import nonMLStyles from "../../styles/MenuLayout.module.css";
import mCardStyle from "../../styles/MenuCard.module.css";

const menu = ({ menuTitles }) => {
	
	return (
		<NonMenuLayout >
			<section className={mCardStyle.LargeOuterContainer}>
				<>
					{menuTitles.menus.map((menu, index) => {
						return (
							<MenuCard key={`${menu.title}MenuCard${index}`} menu={menu} />
						);
					})}
				</>
			</section>
		</NonMenuLayout>
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
