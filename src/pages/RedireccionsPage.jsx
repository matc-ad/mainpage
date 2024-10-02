import Navbar from "../components/Navbar";
import Totes from "../components/Totes";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const RedireccionsPage = ({ isDarkMode, toggleDarkMode }) => (
	<>
		<Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
		<div id="header" className="container mx-auto py-24">
			<Totes isDarkMode={isDarkMode} />
		</div>
		<Footer isDarkMode={isDarkMode} />
	</>
);

RedireccionsPage.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
	toggleDarkMode: PropTypes.func.isRequired,
};

export default RedireccionsPage;
