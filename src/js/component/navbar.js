import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars API</span>
        </Link>
        <div class="dropdown">
          <button
            class="navButton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul class="dropdown-menu">
            {store.favorites.map((item, index) => {
              return (
                <li>
                  <a class="dropdown-item" href="#">
                    {item}
                  </a>
                  <button onClick={()=>{
                    
                     actions.deleteFavorites(index)}
                     }> Delete </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
