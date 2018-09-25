// src/Travels.js

import React from "react";

const Travels = ({ destination, country, photo, distance}) => (
	<figure>
		<h1>{destination}</h1>
		<p>{country}</p>
		<figcaption>
			<img src={photo} alt={destination} />
			<p>{distance}</p>
		</figcaption>
	</figure>
	);

export default Travels;



