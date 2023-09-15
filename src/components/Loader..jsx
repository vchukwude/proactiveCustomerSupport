import { Typewriter } from "react-simple-typewriter";
const Loader = () => {
	return (
		<div className='loader-wrapper flex flex-col'>
			<ul className='loader'>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<div className='mt-10'>
				<h1 className='text-lg text-center lg:text-xl leading-6 tracking-wide text-gray-500 font-semibold mb-5'>
					<Typewriter words={["Predicting Job Outcome.","Please wait..."]} />
				</h1>
			</div>
		</div>
	);
};

export default Loader;
