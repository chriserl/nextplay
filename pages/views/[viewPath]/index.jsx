import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "../../../components/Navbar/Navbar";

const View = () => {
	let { viewPath } = useRouter().query;
	return (
		<React.Fragment>
			<Navbar activePath={viewPath} />
			<div className="view">
				<p>{viewPath}</p>
			</div>
		</React.Fragment>
	);
};

export default View;
