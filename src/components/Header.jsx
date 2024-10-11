import PropTypes from "prop-types";
import { colorsOptions, formulariContacte, randomMessage } from "../constants";

const Header = ({ isDarkMode }) => {
	const handleButtonClick = () => {
		window.location.href = formulariContacte;
	};

	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<header
			className={`text-center py-5 bg-cover bg-center ${colors.background} ${colors.text}`}
			style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
		>
			<div
				className={`p-6 border ${colors.border} rounded-lg ${colors.divBackground} bg-opacity-90 mx-4 md:mx-10 lg:mx-20`}
			>
				<h1 className={`text-5xl font-extrabold mb-6 ${colors.title}`}>
					Benvingut a matc.ad
				</h1>
				<p className={`text-xl font-sans ${colors.paragraph}`}>
					{randomMessage[Math.floor(Math.random() * randomMessage.length)]}
				</p>
				<button
					onClick={handleButtonClick}
					className={`mt-6 font-bold py-2 px-6 rounded-full shadow-lg ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}
				>
					Comença Ara
				</button>
			</div>
		</header>
	);
};

Header.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
