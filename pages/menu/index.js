import Link from "next/link"

const menu = () => {
	return (
		<div>
			<h1>This is a menu menu</h1>

            <ul>
                <li>
                    <Link href="/menu/test">test</Link>
                </li>
            </ul>
            
		</div>
	);
};

export default menu;
