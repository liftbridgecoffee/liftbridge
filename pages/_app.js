import "../styles/globals.css";
import BaseLayout from "../Components/BaseLayout";
// import { makeAPICall } from "./api";
// import { useEffect } from "react";
// import { MenuProvider } from "../context/MenuProvider";
// import { useContext } from "react";

function MyApp({ Component, pageProps }) {
	// useEffect(async () => {
	// 	const footer = await makeAPICall("footer");
	// 	console.log(footer);
	// 	return () => {};
	// }, []);
	return (
		// <MenuProvider>
		<BaseLayout>
			<Component {...pageProps} />
		</BaseLayout>
		// </MenuProvider>
	);
}

// export async function getStaticProps() {
// 	// const footer = await makeAPICall("footer");
// 	return {
// 		props: {
// 			footer,
// 		},
// 		revalidate: 10, // In seconds
// 	};
// }
export default MyApp;
