import { useRouter } from "next/router";

const MenuDisplayPage = () => {
	const router = useRouter();

	const menuname = router.query.name;

	return (
		<div>
			<h1>This is the {menuname} menu</h1>
		</div>
	);
};

export default MenuDisplayPage;
