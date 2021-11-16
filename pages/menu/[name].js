import { getTestMenu } from "../api/sheets";

const MenuDisplayPage = ({ menu }) => {
	console.log(menu);

	return (
		<div>
			<h1>{menu.title}</h1>

			{menu.items.map((item, index) => {
				return (
					<span key={`${index}${index}`}>
						<h3 key={`${index}${item.item * 2}`}>{item.item}</h3>
						<span key={`${index * 2}${item.item + 2}u`}>
							{item.description}
							{item.addons ? (
								<>
									<br></br>
									<span>
										<b>ADD ONS:</b>
									</span>
									<br></br>
									<span>{item.addons}</span>
								</>
							) : null}
						</span>
					</span>
				);
			})}
		</div>
	);
};

export async function getStaticProps({ params }) {
	const menu = await getTestMenu(params.name);
	return {
		props: {
			menu,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: ["/menu/example", "/menu/copyofexample"],
		fallback: `blocking`,
	};
}
export default MenuDisplayPage;
