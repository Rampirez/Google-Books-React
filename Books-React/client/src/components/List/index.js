import React from "react";
import "./style.css";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookItem({
  image = "https://placehold.it/300x300",
  title,
  author,
  description,
  link,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book on Google Books!
            </a> 
            <br></br>
            <button type="button" onClick={onClick} class="btn btn-primary">Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
