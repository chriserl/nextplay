import Head from "next/head";
import Home from "./routes/home/Home";

export default function IndexPage() {
	return (
		<div className="index-page">
			<Head>
				<title>NextPlay App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home />
		</div>
	);
}
