export default function CardView({ data }: any) {
	return (
		<div className="box-shadow mx-3 relative h-full">
			<div className="absolute flex top-[10px] right-[10px]">
				<div className="bg-black text-center px-3 flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#f5c518"
						className="w-6 h-6 mr-2">
						<path
							fillRule="evenodd"
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
							clipRule="evenodd"
						/>
					</svg>
					<span
						className="text-center font-bold"
						style={{ color: "white" }}>
						{data.vote_average}
					</span>
				</div>
			</div>
			<img
				src={`https://image.tmdb.org/t/p/w440_and_h660_face/${data.poster_path}`}
			/>
			<div
				style={{ maxHeight: "300px", overflowY: "auto" }}
				className="p-8">
				<div className="font-bold">{data.title}</div>
				<div className="flex mt-3">
					<span className="font-bold">Release Date:</span>{" "}
					<div className="ml-3 text-gray-400">({data.release_date})</div>
				</div>

				<div className="mt-3">{data.overview}</div>
			</div>
		</div>
	);
}
