import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useState } from "react";
import MenuSmall from "./MenuSmall";

const Nav = () => {
	const [open, setOpen] = useState(false);

	const menuTitles = {
		menus: [
			{ sheetName: "seasonal", title: "seasonal" },
			{ sheetName: "specialty-drinks", title: "specialty drinks" },
			{ sheetName: "blended", title: "blended" },
			{ sheetName: "food", title: "food" },
			{ sheetName: "bottled", title: "bottled" },
			{ sheetName: "catering", title: "catering" },
		],
	};

	const closeMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<div className={`smallMenuBG${open}`}>
				<ul className={`smallNav${open} smallNav`}>
					<li
						onClick={(e) => {
							e.preventDefault();
							setOpen(!open);
						}}
					>
						<Link href="/">
							<span className={navStyles.navLink}>HOME</span>
						</Link>
					</li>
					<li
						onClick={(e) => {
							e.preventDefault();
							setOpen(!open);
						}}
					>
						<Link href="/about">
							<span className={navStyles.navLink}>ABOUT</span>
						</Link>
					</li>
				</ul>
			</div>
			<nav className={navStyles.nav}>
				<div className={`smallMenu${open}`}>
					<MenuSmall menuTitles={menuTitles} closeMenu={() => closeMenu()} />
				</div>

				<a
					href="/"
					className={`sandwich${open}`}
					onClick={(e) => {
						e.preventDefault();
						setOpen(!open);
					}}
				>
					<span className={`i-box`}>
						<span className={`i${open}`}>|</span>
						<span className={`ii${open}`}>|</span>
						<span className={`iii${open}`}>|</span>
					</span>
				</a>
			</nav>
		</>
	);
};

export default Nav;
