import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Vehicle = props => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
    console.log(store.vehicle)
    useEffect(() => {
        actions.getVehicle(id);
    }, [])
	return (
		<div className="jumbotron">
			<h1> {store.vehicle.name} </h1>
		</div>
	);
};