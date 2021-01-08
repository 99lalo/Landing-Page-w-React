import React from "react";

export function Content() {
	return (
		<div className="container">
			<div className="jumbotron pt-0">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					<b>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin pretium purus ante, sit amet tempus dolor
						malesuada vel. Donec tempor elit velit, maximus rhoncus
						urna imperdiet porta
					</b>
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
			<div className="row justify-content-between m-1" />
		</div>
	);
}
