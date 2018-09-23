// src/Travels.js

import React from "react";

const Travels = props => (
	<figure>
		<h1>{props.destination}</h1>
		<p>{props.country}</p>
		<figcaption>
			<img src={props.photo} alt={props.destination} />
			<p>{props.distance}</p>
		</figcaption>
	</figure>
);

export default Travels;