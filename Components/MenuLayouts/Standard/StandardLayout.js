//!Base Menu Layout

import menuStyles from "../../../styles/MenuLayout.module.css";

const StandardLayout = ({ menu, children }) => {
	return (
		<div className={menuStyles.menuLayout.baseContainer}>
			<header>
				<h1 className={menuStyles.h1}>{menu.title}</h1>
			</header>
			<section>{children}</section>
		</div>
	);
};

export default StandardLayout;
