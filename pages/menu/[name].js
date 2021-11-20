import { makeAPICall } from "../api";

import StandardLayout from "../../Components/MenuLayouts/Standard/StandardLayout";
import Specialty from "../../Components/MenuLayouts/Standard/Specialty";
import MenuPageHead from "../../Components/MenuPageHead";

const MenuDisplayPage = ({ menu, name }) => {
	console.log(menu);

	const selectedMenuRender = (name) => {
		switch (name) {
			case "specialty-drinks":
				return (
					<StandardLayout menu={menu}>
						<Specialty menu={menu} />
					</StandardLayout>
				);
			case "seasonal":
				return <h1>{menu.title}</h1>;
			case "food":
				return <h1>{menu.title}</h1>;
			case "blended":
				return <h1>{menu.title}</h1>;
			case "bottled":
				return <h1>{menu.title}</h1>;
			case "catering":
				return <h1>{menu.title}</h1>;
		}
	};

	return (
		<>
			<MenuPageHead menu={menu} />
			{selectedMenuRender(name)}
		</>
	);
};

export async function getStaticProps({ params }) {
	const menu = await makeAPICall(params.name);
	return {
		props: {
			menu,
			name: params.name,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [
			"/menu/specialty-drinks",
			"/menu/seasonal",
			"/menu/food",
			"/menu/blended",
			"/menu/bottled",
			"/menu/catering",
		],
		fallback: `blocking`,
	};
}
export default MenuDisplayPage;
