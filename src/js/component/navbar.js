import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav id="logo" className="navbar navbar-light bg-dark mb-3">
			<img src="https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg" height="100" width="200"></img>
			<button id="navButton">Favorites <span id="navNumber">0</span></button>
		</nav>
	);
};
