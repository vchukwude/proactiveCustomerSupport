import React from "react";
import ApexCharts from "react-apexcharts";

const categoriesAndValues = (arrObj, categoryKey, valueKey) => {
	const categories = arrObj.map((obj) => obj[categoryKey]);
	const categoryValues = arrObj.map((obj) => obj[valueKey]);

	return [categories, categoryValues];
};

const BarChart = ({ data, categoryKey, valueKey }) => {
	const [categories, categoryValues] = categoriesAndValues(
		data,
		categoryKey,
		valueKey
	);

	const barChartOptions = {
		chart: {
			id: "bar",
		},
	
		xaxis: {
			categories: categories,
        },
        
        colors: ["#0066f5"],
        fill: {
			colors: '#0066f5'
		  },

		plotOptions: {
			bar: {
				horizontal: false,
			},
		},
	};

	const barChartSeries = [
		{
			name: "My Data",
			data: categoryValues.length === 0 ? [1, 1] : categoryValues,
		},
	];

	return (
		<div className='p-5 border border-gray-100 rounded-lg max-w-[900px]'>
			<ApexCharts
				width={600}
				options={barChartOptions}
				series={barChartSeries}
                height={350}
                type="bar"
			/>
		</div>
	);
};

export default BarChart;
