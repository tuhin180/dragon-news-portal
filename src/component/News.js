import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { author, details, image_url, title, category_id } = news;

  return (
    <div>
      <p>{news.length}</p>

      <div>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="primary">Go to news</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default News;
