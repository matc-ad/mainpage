import PropTypes from "prop-types";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modalitats from "../components/Modalitats";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Subdomains from "../components/Subdomains";

const Home = ({ isDarkMode, toggleDarkMode }) => (
	<>
		<Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
		<div id="header" className="container mx-auto py-24 hyphens-auto">
			<Header isDarkMode={isDarkMode} />
			<Modalitats isDarkMode={isDarkMode} />
			<Subdomains isDarkMode={isDarkMode} />
			<FAQs isDarkMode={isDarkMode} />
			<Roadmap isDarkMode={isDarkMode} />
		</div>
		<Footer isDarkMode={isDarkMode} />
	</>
);

Home.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
	toggleDarkMode: PropTypes.func.isRequired,
};

export default Home;
