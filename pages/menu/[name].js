// import { makeAPICall } from "../api";
// import { useRouter } from "next/router";

// import ErrorPage from "next/error";

// import StandardLayout from "../../Components/MenuLayouts/Standard/StandardLayout";
// import Specialty from "../../Components/MenuLayouts/Standard/Specialty";
// import Seasonal from "../../Components/MenuLayouts/Seasonal/Winter";
// import Blended from "../../Components/MenuLayouts/Standard/Blended";
// import Bottled from "../../Components/MenuLayouts/Standard/Bottled";
// import Catering from "../../Components/MenuLayouts/Standard/Catering";
// import Food from "../../Components/MenuLayouts/Standard/Food";
// import MenuPageHead from "../../Components/MenuPageHead";

// const MenuDisplayPage = ({ menu, name }) => {
// 	const selectedMenuRender = (name) => {
// 		switch (name) {
// 			case "specialty-drinks":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Specialty menu={menu} />
// 					</StandardLayout>
// 				);
// 			case "seasonal":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Seasonal menu={menu} />
// 					</StandardLayout>
// 				);
// 			case "food":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Food menu={menu} />
// 					</StandardLayout>
// 				);
// 			case "blended":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Blended menu={menu} />
// 					</StandardLayout>
// 				);
// 			case "bottled":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Bottled menu={menu} />
// 					</StandardLayout>
// 				);
// 			case "catering":
// 				return (
// 					<StandardLayout name={name} menu={menu}>
// 						<Catering menu={menu} />
// 					</StandardLayout>
// 				);
// 		}
// 	};

// 	return (
// 		<>
// 			<MenuPageHead menu={menu} />
// 			{selectedMenuRender(name)}
// 		</>
// 	);
// };

// export async function getStaticProps({ params }) {
// 	const menu = await makeAPICall(params.name);
// 	return {
// 		props: {
// 			menu,
// 			name: params.name,
// 		},
// 	};
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			"/menu/specialty-drinks",
// 			"/menu/seasonal",
// 			"/menu/food",
// 			"/menu/blended",
// 			"/menu/bottled",
// 			"/menu/catering",
// 		],
// 		fallback: `blocking`,
// 	};
// }
// export default MenuDisplayPage;
//! test -----------------------------------------//
import { makeAPICall } from "../api";
import { useRouter } from "next/router";

import ErrorPage from "next/error";

import StandardLayout from "../../Components/MenuLayouts/Standard/StandardLayout";
import Specialty from "../../Components/MenuLayouts/Standard/Specialty";
import Seasonal from "../../Components/MenuLayouts/Seasonal/Winter";
import Blended from "../../Components/MenuLayouts/Standard/Blended";
import Bottled from "../../Components/MenuLayouts/Standard/Bottled";
import Catering from "../../Components/MenuLayouts/Standard/Catering";
import Food from "../../Components/MenuLayouts/Standard/Food";
import MenuPageHead from "../../Components/MenuPageHead";

const MenuDisplayPage = ({ menu, name }) => {
	const selectedMenuRender = (name) => {
		switch (name) {
			case "specialty-drinks":
				return (
					<StandardLayout name={name} menu={menu}>
						<Specialty menu={menu} />
					</StandardLayout>
				);
			case "seasonal":
				return (
					<StandardLayout name={name} menu={menu}>
						<Seasonal menu={menu} />
					</StandardLayout>
				);
			case "food":
				return (
					<StandardLayout name={name} menu={menu}>
						<Food menu={menu} />
					</StandardLayout>
				);
			case "blended":
				return (
					<StandardLayout name={name} menu={menu}>
						<Blended menu={menu} />
					</StandardLayout>
				);
			case "bottled":
				return (
					<StandardLayout name={name} menu={menu}>
						<Bottled menu={menu} />
					</StandardLayout>
				);
			case "catering":
				return (
					<StandardLayout name={name} menu={menu}>
						<Catering menu={menu} />
					</StandardLayout>
				);
		}
	};

	return (
		<>
			<ErrorPage statusCode={404} />
			{/* <MenuPageHead menu={menu} /> */}
			{/* {selectedMenuRender(name)} */}
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
