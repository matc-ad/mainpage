import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { colorsOptions, redireccions } from "./constants";
import Home from "./pages/Home";
import NonExistent from "./pages/NonExistent";
import RedireccionsPage from "./pages/RedireccionsPage";

const RedirectTo = ({ url }) => {
	useEffect(() => {
		window.location.href = url;
	}, [url]);
	return null;
};

RedirectTo.propTypes = {
	url: PropTypes.string.isRequired,
};

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = Cookies.get("darkMode");
		return savedMode === "true" || savedMode === undefined; // Default to dark mode if no cookie is set
	});

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			Cookies.set("darkMode", newMode, { expires: 365 });
			return newMode;
		});
	};

	useEffect(() => {
		const mode = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;
		document.body.className = `${mode.background} ${mode.text}`;
	}, [isDarkMode]);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
					}
				/>
				<Route
					path="/redireccions"
					element={
						<RedireccionsPage
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
						/>
					}
				/>
				{redireccions.map((item, index) => (
					<Route
						key={index}
						path={item.page}
						element={<RedirectTo url={item.url} />}
					/>
				))}
				<Route
					path="*"
					element={
						<NonExistent
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
						/>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
