//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/navbar.js";
import { Content } from "./component/jumbotron.js";
import { Footer } from "./component/footer.js";
import { Card } from "./component/card.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<div className="container">
			<Content />
			<div className="row justify-content-between m-1">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
