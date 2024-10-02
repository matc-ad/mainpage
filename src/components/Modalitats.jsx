import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { colorsOptions, modalitatsOptions } from "../constants";

const ModalitatCard = ({ option, colors }) => (
	<div className="flex flex-col w-full sm:w-2/3 lg:w-1/2 p-3 justify-center">
		<div
			className={`p-6 border ${colors.border} ${colors.divBackground} rounded-xl text-center flex flex-col w-full`}
		>
			<p className="text-4xl mb-4">{option.title}</p>
			<p className="mb-4">
				<span className="text-5xl mt-6 mr-2">{option.price}</span>
				<span className={`${colors.paragraph} tracking-tight`}>/Any</span>
			</p>
			<ul className="text-left flex-grow">
				{option.features.map((feature, index) => (
					<li key={index} className="mt-4 flex items-center">
						<FaStar className="flex-shrink-0" />
						<span className="ml-2">{feature}</span>
					</li>
				))}
			</ul>
		</div>
		<div
			className={`p-4 border-4 ${colors.border} w-3/4 sm:w-2/3 lg:w-1/2 ${colors.importantBackground} rounded-b-xl w-full shadow-2xl transform transition-transform hover:scale-110 mx-auto`}
		>
			<p className={`${colors.text} font-bold text-2xl mb-2`}>
				Requisits destacats:
			</p>
			<p className={`${colors.text} text-lg`}>{option.requisits}</p>
		</div>
	</div>
);

ModalitatCard.propTypes = {
	option: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		features: PropTypes.arrayOf(PropTypes.string).isRequired,
		requisits: PropTypes.string,
	}).isRequired,
	colors: PropTypes.object.isRequired,
};

const Modalitats = ({ isDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<section
			id="modalitats"
			className={`py-5 ${colors.background} ${colors.text}`}
		>
			<div className="container mx-auto text-center px-4">
				<h2 className={`text-4xl font-extrabold ${colors.title}`}>
					Les modalitats
				</h2>
				<p className={`mt-4 text-lg ${colors.paragraph}`}>
					Comparació de les modalitats disponibles.
				</p>
				<div className="flex flex-wrap justify-center mt-12">
					{modalitatsOptions.map((option, index) => (
						<ModalitatCard key={index} option={option} colors={colors} />
					))}
				</div>
			</div>
		</section>
	);
};

Modalitats.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default Modalitats;
