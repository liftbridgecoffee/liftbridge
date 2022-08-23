import styles from "../styles/Layout.module.css";

import Nav from "./Nav";
import Footer from "./Footer";
const BaseLayout = ({ children }) => {
	return (
		<>
			<Nav />
				<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
};
export default BaseLayout;
