import Link from "next/link";

const menu = () => {
	return (
		<div>
			<h1>This is a menu menu</h1>

			<ul>
				<li>
					<Link href="/menu/specialty-drinks">specialty</Link>
				</li>
				<li>
					<Link href="/menu/seasonal">seasonal</Link>
				</li>
				<li>
					<Link href="/menu/food">food</Link>
				</li>
				<li>
					<Link href="/menu/blended">blended</Link>
				</li>
				<li>
					<Link href="/menu/bottled">bottled</Link>
				</li>
				<li>
					<Link href="/menu/catering">catering</Link>
				</li>
			</ul>
		</div>
	);
};

export default menu;
