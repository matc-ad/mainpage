import PropTypes from "prop-types";
import { colorsOptions, preguntesFreq } from "../constants";

const FAQItem = ({ question, answer, colors }) => (
	<div
		className={`items-center p-6 border ${colors.border} rounded-lg shadow-md mb-8 ${colors.divBackground}`}
	>
		<h3 className={`text-2xl font-bold ${colors.title}`}>{question}</h3>
		<p
			className={`mt-2 ${colors.paragraph}`}
			dangerouslySetInnerHTML={{
				__html: answer.replace(/<a /g, `<a class="${colors.title}" `),
			}}
		></p>
	</div>
);

FAQItem.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	colors: PropTypes.object.isRequired,
};

const FAQs = ({ isDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<section
			id="faq"
			className={`py-5 px-4 sm:px-6 lg:px-8 ${colors.background} ${colors.text}`}
		>
			<div className="container mx-auto text-center">
				<h2 className={`text-4xl font-extrabold ${colors.title}`}>
					Preguntes Freqüents
				</h2>
				<div className="mt-12 text-left">
					{preguntesFreq.map((faq, index) => (
						<FAQItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							colors={colors}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

FAQs.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default FAQs;
