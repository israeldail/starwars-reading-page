import React from "react";
import "../../styles/home.css";
import { useEffect, useContext } from "react";
import { Context, Provider } from '../store/appContext.js'
import { Link } from "react-router-dom";
import { People } from "../component/people";

export const Home = (props) => {
	
	return(
		<div>
			<People />
		</div>
	)
};


