import MenuCard from "./MenuComponents/MenuCard";

const MenuSmall = ({ menuTitles, closeMenu }) => {
	return (
		<>
			<div className="smallMenu-inner">
				{menuTitles.menus.map((menu, index) => {
					return (
						<span
							key={`${menu.title}MenuSpan${index}`}
							onClick={() => {
								closeMenu();
							}}
						>
							<MenuCard key={`${menu.title}MenuCard${index}`} menu={menu} />
						</span>
					);
				})}
			</div>
		</>
	);
};

export default MenuSmall;
