import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Person = props => {
	const { store, actions } = useContext(Context);
    console.log(store.person)
    useEffect(() => {
        actions.getPerson();
    }, [])
    //let id = props.match.params.id;
	return (
		<div id="background" className="jumbotron">
			<h1 id="name"> {store.person.name} </h1>
			<p id="description">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith.</p>

			<h1 id="traits">Traits</h1>
				<ul id="personList">
					<li>Mass: {store.person.mass} </li>
					<li>Height: {store.person.height} </li>
					<li>Hair Color: {store.person.hair_color} </li>
					<li>Gender: {store.person.gender} </li>
				</ul>
		</div>
	);
};


