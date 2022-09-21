import MenuCard from "../../Components/MenuComponents/MenuCard";
import { makeAPICall } from "../api";
import NonMenuLayout from "../../Components/NonMenuLayout";

//import nonMLStyles from "../../styles/MenuLayout.module.css";
import mCardStyle from "../../styles/MenuCard.module.css";
import MenuPageHead from "../../Components/MenuPageHead";

const menu = ({ menuTitles, footer }) => {
	return (
		<>
			<MenuPageHead menu={{ title: "", description: "all menus" }} />
			<NonMenuLayout footer={footer}>
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
		</>
	);
};

export async function getStaticProps() {
	const menuTitles = await makeAPICall("names");
	const footer = await makeAPICall("footer");

	return {
		props: {
			menuTitles,
			footer,
		},
		revalidate: 1,
	};
}

export default menu;
