import React from "react";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";


export const Planets = (props) => {
  
  useEffect(() => {
    actions.planets();
  }, []);
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5 d-flex">
      {store.planets.map((planets, i) => {
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
                <Card.Title>{planets.name}</Card.Title>
                <Link
                  style={{ color: "white" }}
                  to={`planets/${planets.uid}`}
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
