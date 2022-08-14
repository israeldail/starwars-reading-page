import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const People = (props) => {
  console.log(props);
  useEffect(() => {
    actions.getPeople();
  }, []);
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5 d-flex">
      {store.people.map((person, i) => {
        return (
          <Col key={i}>
            <Card
              className="bg-dark text-white space"
              style={{ width: "20rem" }}
            >
              <Card.Img
                className="imagen"
                variant="top"
                src="https://wallpaperaccess.com/full/1087224.jpg"
              />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Link
                  style={{ color: "white" }}
                  to={`people/${person.uid}`}
                >
                  <Button variant="primary">Learn More</Button>
                </Link>
                <Button className="heart" variant="warning">
                  <i className="far fa-heart" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  );
};
