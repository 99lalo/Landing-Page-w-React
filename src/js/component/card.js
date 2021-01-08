import React from "react";

export function Card() {
	return (
		<div className="card" style={{ width: "16rem" }}>
			<img
				className="card-img-top"
				src="https://cdn2.hubspot.net/hub/1927341/hubfs/image-heat-for-the-holidays-toasty-fire-500x325px.jpg?width=750&name=image-heat-for-the-holidays-toasty-fire-500x325px.jpg"
				alt="Card image cap"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Proin pretium purus ante, sit amet tempus dolor malesuada
					vel.
				</p>
			</div>
			<div className="card-footer d-flex justify-content-center">
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
}
