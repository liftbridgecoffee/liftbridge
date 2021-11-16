import Link from "next/link"

const menu = () => {
	return (
		<div>
			<h1>This is a menu menu</h1>

            <ul>
                <li>
                    <Link href="/menu/test">test</Link>
                </li>
                <li>
                    <Link href="/menu/test2">test2</Link>
                </li>
                <li>
                    <Link href="/menu/test3">test3</Link>
                </li>
                <li>
                    <Link href="/menu/test4">test4</Link>
                </li>
                <li>
                    <Link href="/menu/test5">test5</Link>
                </li>
            </ul>
            
		</div>
	);
};

export default menu;
