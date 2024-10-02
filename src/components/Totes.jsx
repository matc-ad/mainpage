import PropTypes from "prop-types";
import { colorsOptions, redireccions } from "../constants";

const Totes = ({ isDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;
	const handleClick = (url) => {
		window.location.href = url;
	};

	const sortedRedireccions = [...redireccions].sort((a, b) =>
		a.page.localeCompare(b.page),
	);

	return (
		<section
			id="redireccions"
			className={`py-5 ${colors.background} ${colors.text}`}
		>
			<div className="container mx-auto text-center px-4">
				<h2 className={`text-4xl font-extrabold ${colors.title}`}>
					Les redireccions
				</h2>
				<p className={`mt-4 text-lg ${colors.description}`}>
					Explora les redireccions.
				</p>
				<div className="flex flex-wrap justify-center mt-12">
					{sortedRedireccions.map((option, index) => (
						<div
							key={index}
							className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
						>
							<div
								className={`p-6 border ${colors.border} ${colors.divBackground} rounded-xl text-center flex flex-col w-full cursor-pointer`}
								onClick={() => handleClick(option.url)}
							>
								<h3 className={`text-2xl font-bold ${colors.title}`}>
									{option.page}
								</h3>
								<p className="mt-4">Redirigeix a "{option.url}"</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Totes.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default Totes;
