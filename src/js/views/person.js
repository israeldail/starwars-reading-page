import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Person = props => {
    console.log(props)
	const { store, actions } = useContext(Context);
    console.log(store.person)
    useEffect(() => {
        actions.getPerson();
    }, [])
    //let id = props.match.params.id;
	return (
		<div className="jumbotron">
			<h1> {store.person.name} </h1>
		</div>
	);
};


