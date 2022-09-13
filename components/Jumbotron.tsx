import React from "react";

const Jumbotron = () => {
	return (
		<>
			<div className="w-full max-w-[100%] m-auto">
				<div className="flex flex-col">
					<div className="jumboContainer border-t-8 border-t-[#222]">
						<div className="contContent">
							<p className="contentPara">Enjoy on your TV.</p>
							<span className="contSpan">
								Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
								Blu-ray players and more.
							</span>
						</div>
						<div className="relative flex justify-center items-center w-[75%] lg:w-[50%]">
							<div className="relative overflow-hidden m-[-10% -5% -5% 0] z-[2]">
								<img
									src="/assets/tv.png"
									className="relative max-w-full h-auto z-[2]"
									alt=""
								/>
								<div className="absolute h-full left-[13%] max-h-[54%] max-w-[73%] top-[20%] transform translate-[-50%, -50%] w-full">
									<video src="/assets/tv.m4v" muted autoPlay loop />
								</div>
							</div>
						</div>
					</div>
					<div className="jumboContainerReverse">
						<div className="contContent">
							<p className="contentPara">
								Download your shows to watch offline.
							</p>
							<span className="contSpan">
								Save your favourites easily and always have something to watch.
							</span>
						</div>
						<div>
							<img
								src="/assets/mobile.jpg"
								alt=""
								className="w-[100%] lg:mr-10"
							/>
						</div>
					</div>

					<div className="jumboContainer">
						<div className="contContent">
							<p className="contentPara">Watch everywhere.</p>
							<span className="contSpan">
								Stream unlimited movies and TV shows on your phone, tablet,
								laptop, and TV.
							</span>
						</div>
						<div className="relative flex justify-center items-center w-[75%] lg:w-[50%]">
							<div className="relative overflow-hidden m-[-10% -5% -5% 0] z-[2] mt-[2.5rem]">
								<img
									src="/assets/device.png"
									className="relative max-w-full h-auto z-[2]"
									alt=""
								/>
								<div className="absolute h-full left-[19%] max-h-[60%] max-w-[62%] top-[9%] transform translate-[-50%, -50%] w-full">
									<video src="/assets/video-devices.m4v" muted autoPlay loop />
								</div>
							</div>
						</div>
					</div>

					<div className="jumboContainerReverse">
						<div className="contContent">
							<p className="contentPara">Create profiles for children.</p>
							<span className="contSpan">
								Send children on adventures with their favourite characters in a
								space made just for them—free with your membership.
							</span>
						</div>
						<div>
							<img src="/assets/children.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Jumbotron;
