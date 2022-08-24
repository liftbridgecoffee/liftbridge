import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useState } from "react";
const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className={navStyles.nav}>
			<ul className={`nav${open}`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/menu">Menus</Link>
				</li>
			</ul>
			{/*  <a
				href="/"
				className={`sandwich${open}`}
				onClick={(e) => {
					e.preventDefault();
					setOpen(!open);
				}}
			>
				<span className={`i${open}`}>|</span>
				<span className={`ii${open}`}>|</span>
				<span className={`iii${open}`}>|</span>
			</a> */}
		</nav>
	);
};

export default Nav;
