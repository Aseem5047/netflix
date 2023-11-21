import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings";
import { useState } from "react";

interface Props {
	movie: Movie | DocumentData;
}

const Thumbnail = ({ movie }: Props) => {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	const [cardHover, setCardHover] = useState(false);

	// console.log(movie);
	// console.log(cardHover);

	// original_title overview

	return (
		<div
			className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
			onClick={() => {
				setCurrentMovie(movie);
				setShowModal(true);
			}}
			onMouseEnter={() => {
				setCurrentMovie(movie);

				setCardHover(true);
			}}
			onMouseLeave={() => {
				setCardHover(false);
			}}
		>
			<Image
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				className="rounded-sm object-cover md:rounded"
				layout="fill"
			/>{" "}
			{movie?.id == currentMovie?.id && (
				<div
					className={`${
						cardHover
							? "absolute bottom-0 p-2 pb-3 w-full bg-gradient-to-t from-black to-black/20 text-white flex flex-col gap-2 items-start justify-center"
							: "hidden"
					}`}
				>
					<span className="text-lg max-w-[13rem] overflow-hidden text-ellipsis whitespace-nowrap">
						{movie.original_title || movie.name}
					</span>
					<span className="text-sm max-h-[10rem] overflow-hidden block line-clamp-3">
						{movie?.overview}
					</span>
				</div>
			)}
		</div>
	);
};

export default Thumbnail;
