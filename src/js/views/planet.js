import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Planet = props => {
    console.log(props)
	const { store, actions } = useContext(Context);
    console.log(store.planet)
    useEffect(() => {
        actions.planet();
    }, [])
    //let id = props.match.params.id;
	return (
		<div className="jumbotron">
			<h1> {store.planet.name} </h1>
		</div>
	);
};