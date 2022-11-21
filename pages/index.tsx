import CardView from "../components/cardView";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
	const [data, setData] = useState<any>([]);
	const [page, setPage] = useState<Number>(0);
	async function fetchMovie() {
		let pageMain: any = page;
		pageMain += 1;
		setPage(pageMain);
		let mainData;
		const movieData = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=c4e5a782b73609f8265db9e1ccc97f3f&sort_by=popularity.desc&page=${pageMain}`
		);
		const jsonData = await movieData.json();

		setTimeout(() => {
			mainData = [...data, ...jsonData.results];

			setData(mainData);
		}, 600);
	}
	useEffect(() => {
		fetchMovie();
	}, []);

	useEffect(() => {}, [data]);
	return (
		<div className="max-w-[1000px] ml-auto mr-auto m-5">
			<h1 className="text-center text-xl font-bold">TOP 100 MOVIE LIST</h1>

			<InfiniteScroll
				dataLength={data.length ? data.length : 0}
				next={fetchMovie}
				hasMore={true}
				loader={<h4>Loading...</h4>}>
				<div className="grid md:grid-cols-3 grid-cols-1">
					{data?.map((i: any, index: any) => (
						<div
							className="h-full py-5"
							key={index}>
							<CardView data={i} />
						</div>
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
}
