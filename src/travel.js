import React from "react";
import Travels from "./travels";

const travel = [
	{
		destination: "Tokyo ",
		country: "Japon", 
		photo: "https://images.unsplash.com/photo-1446694518429-60077dd2e230?ixlib=rb-0.3.5&s=9cd0a01a7a349a102f89a27aa39d9d90&auto=format&fit=crop&w=500&q=60" ,
		distance: "Distance : Paris - Tokyo : 9706km" , 	
	},
	{
		destination: "Petra",
		country: "Jordanie", 
		photo: "https://images.unsplash.com/photo-1530624852-9beb898b2820?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22202be1ef73321e978e3e4de113ca3b&auto=format&fit=crop&w=500&q=60" ,
		distance: "Distance : Paris - Petra : 4.505km" , 
	},
	{
		destination: "kuala lumpur ",
		country: "Malaisie", 
		photo: "https://images.unsplash.com/photo-1530445098981-862544854865?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d000145855d2941d15db49aba15d0d4&auto=format&fit=crop&w=500&q=60",
		distance: "Distance : Paris - Tokyo : 10 417 km" , 
	},
	{
		destination: "Sydney ",
		country: "Australie", 
		photo: "https://images.unsplash.com/photo-1526198968359-5a74beda17f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=62bc89c918c1df84dd73aef26ee04263&auto=format&fit=crop&w=500&q=60" ,
		distance: "Distance : Paris - Sydney : 16 950km" , 
	},
	{
		destination: "Amsterdam ",
		country: "PaysBas", 
		photo: "https://images.unsplash.com/photo-1530802679254-271b43c15034?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24d016c37b5f709ffb9b4d0f2b886f1a&auto=format&fit=crop&w=500&q=60" ,
		distance: "Distance : Paris - Tokyo : 503km" , 
	},
]

const Travel = () => (
	<div>

		{travel.map(x => 
			<Travels {...x} />
			//<Travels destination={x.destination} country = {x.country} photo={x.photo} distance = {x.distance} />
	)}

	</div>
)

export default Travel;