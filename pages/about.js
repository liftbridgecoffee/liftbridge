import homeStyle from "../styles/HomeStyle.module.css";
import NonMenuLayout from "../Components/NonMenuLayout";
import { useEffect } from "react";

const about = () => {
	useEffect(() => {
		let main = document.querySelector("main");
		main.style.minHeight = "1vh";

		// main.style.marginBottom = "-10px";

		return () => {
			main.style.minHeight = "100vh";
		};
	}, []);

	return (
		<>
			<NonMenuLayout>
				We're still figuring that out ourselves... come back soon
			</NonMenuLayout>
		</>
	);
};
export default about;
