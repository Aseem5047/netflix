import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-[40vh]">
			<Image
				src="/spinner.png"
				alt="Loading"
				width={100}
				height={100}
				className=" animate-spin  w-20 h-20  rounded-full"
			/>
			{/* <p className="text-3xl mt-5">Loading</p> */}
		</div>
	);
};

export default Loading;
