import React from "react";
import ApexCharts from "react-apexcharts";

const categoriesAndValues = (arrObj, categoryKey, valueKey) => {
	const categories = arrObj.map((obj) => obj[categoryKey]);
	const categoryValues = arrObj.map((obj) => obj[valueKey]);

	return [categories, categoryValues];
};


const PieChart = ({ data, categoryKey, valueKey }) => {
	const [categories, categoryValues] = categoriesAndValues(
		data,
		categoryKey,
		valueKey
	);

	const chartSeries = categoryValues;
	const chartOptions = {
		labels: categories,
	};

	return (
		<div className="p-5 border border-gray-100 rounded-lg max-w-[700px]">
			<ApexCharts
				width={600}
				options={chartOptions}
				series={chartSeries}
				type='pie'
				height={350}
			/>
		</div>
	);
};

export default PieChart;
