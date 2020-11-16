import { NextPage } from "next";
import Head from "next/head";
import Home from "./routes/home/Home";

const IndexPage: NextPage = () => {
	return (
		<div className="index-page">
			<Head>
				<title>NextPlay App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home />
		</div>
	);
};

export default IndexPage;
