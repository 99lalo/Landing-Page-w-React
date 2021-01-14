import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Content } from "./jumbotron";
import { Footer } from "./footer";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Content />
				<div className="row justify-content-between m-1">
					<Card
						image={
							"https://cdn.pixabay.com/photo/2018/04/01/15/02/grey-seal-3281160_960_720.jpg"
						}
						title={"Seal"}
						description={"Seals are my favorite animal"}
						link={
							"https://www.nationalgeographic.com/animals/mammals/group/seals-pinnipeds-walruses-sea-lions/"
						}
					/>
					<Card
						image={
							"https://cdn.pixabay.com/photo/2018/04/01/15/02/grey-seal-3281160_960_720.jpg"
						}
						title={"Lorem Ipsum"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere."
						}
						link={"https://www.lipsum.com/"}
					/>
					<Card
						image={
							"https://cdn.pixabay.com/photo/2018/04/01/15/02/grey-seal-3281160_960_720.jpg"
						}
						title={"Lorem Ipsum"}
						description={
							"Quisque eget nunc leo. Integer volutpat mauris vel sem ullamcorper, et mollis lacus iaculis."
						}
						link={"https://www.lipsum.com/"}
					/>
					<Card
						image={
							"https://cdn.pixabay.com/photo/2018/04/01/15/02/grey-seal-3281160_960_720.jpg"
						}
						title={"Lorem Ipsum"}
						description={
							"Integer eleifend sed turpis non lobortis. Pellentesque."
						}
						link={"https://www.lipsum.com/"}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};
