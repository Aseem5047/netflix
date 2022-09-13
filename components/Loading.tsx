const Loading = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-[40vh]">
			<img
				src="/spinner.png"
				alt="Loading"
				className=" animate-spin  w-20 h-20  rounded-full"
			/>
			{/* <p className="text-3xl mt-5">Loading</p> */}
		</div>
	);
};

export default Loading;
