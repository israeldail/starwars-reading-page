import React from "react";
import "../../styles/home.css";
import { useEffect, useContext } from "react";
import { Context, Provider } from '../store/appContext.js'
import { Link } from "react-router-dom";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = (props) => {
	
	return(
		<div>
			<People />
			<Planets />
			<Vehicles />
		</div>
	)
};


