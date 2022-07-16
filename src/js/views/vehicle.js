import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
    console.log(store.vehicle)
    useEffect(() => {
        actions.getVehicle();
    }, [])
    //let id = props.match.params.id;
	return (
		<div className="jumbotron">
			<h1> {store.vehicle.name} </h1>
		</div>
	);
};