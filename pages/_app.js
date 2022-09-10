import "../styles/globals.css";
import BaseLayout from "../Components/BaseLayout";
// import { MenuProvider } from "../context/MenuProvider";
// import { useContext } from "react";

function MyApp({ Component, pageProps }) {
	return (
		// <MenuProvider>
		<BaseLayout>
			<Component {...pageProps} />
		</BaseLayout>
		// </MenuProvider>
	);
}

export default MyApp;
