import Head from "next/dist/shared/lib/head";
const MenuPageHead = ({ menu }) => {
	return (
		<Head>
			<title>{menu.title} Menu | Lift Bridge Coffee Tacoma</title>
			<meta name="description" content={`${menu.pageDescription}`} />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta charSet="UTF-8" />
		</Head>
	);
};

export default MenuPageHead;
