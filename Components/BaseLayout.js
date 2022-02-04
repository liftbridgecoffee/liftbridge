import styles from "../styles/Layout.module.css";

import Nav from "./Nav";
import Footer from "./Footer";
const BaseLayout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</>
	);
};
export default BaseLayout;
