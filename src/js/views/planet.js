import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planet = props => {
    const {id} = useParams();
    console.log(props)
	const { store, actions } = useContext(Context);
    console.log(store.planet)
    useEffect(() => {
        actions.planet(id);
    }, [])
	return (
		<div className="jumbotron">
			<h1> {store.planet.name} </h1>

           
		</div>
	);
};