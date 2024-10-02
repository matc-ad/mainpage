import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { colorsOptions, roadmapItems } from "../constants";

const formatDate = (dateStr) => {
	const [day, month, year] = dateStr.split("/");
	return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
};

const sortedRoadmapItems = roadmapItems
	.map((item) => ({
		...item,
		date: formatDate(item.date),
	}))
	.sort((a, b) => {
		const [dayA, monthA, yearA] = a.date.split("/").map(Number);
		const [dayB, monthB, yearB] = b.date.split("/").map(Number);
		return (
			new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB)
		);
	});

const RoadmapItem = ({ item, colors }) => (
	<li
		className={`flex items-center justify-between p-6 border ${colors.border} rounded-lg shadow-md ${colors.divBackground}`}
	>
		<FaStar className="flex-shrink-0" />
		<span className={`ml-2 flex-grow ${colors.text}`}>{item.description}</span>
		<span className={`text-sm ${colors.paragraph}`}>{item.date}</span>
	</li>
);

RoadmapItem.propTypes = {
	item: PropTypes.shape({
		description: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
	}).isRequired,
	colors: PropTypes.object.isRequired,
};

const Roadmap = ({ isDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<section
			id="roadmap"
			className={`py-5 ${colors.background} ${colors.text}`}
		>
			<div className="container mx-auto text-center px-4">
				<h1 className={`text-4xl font-extrabold ${colors.title}`}>
					Full de ruta
				</h1>
				<p className={`mt-4 text-lg ${colors.paragraph}`}>
					Aquí pots veure el nostre full de ruta amb les dates en les què creiem
					que estarà llest.
				</p>
				<ul className="mt-8 space-y-4 text-lg">
					{sortedRoadmapItems.map((item, index) => (
						<RoadmapItem key={index} item={item} colors={colors} />
					))}
				</ul>
			</div>
		</section>
	);
};

Roadmap.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default Roadmap;
