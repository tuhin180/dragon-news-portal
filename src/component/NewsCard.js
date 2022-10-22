import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const { author, rating, details, _id, title, image_url, total_view } = news;

  return (
    <div>
      <Card className="text-left  mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex ">
            <Image
              roundedCircle
              className="me-2"
              style={{ height: "60px" }}
              src={author.img}
            ></Image>
            <div>
              <p className="mb-0">{author.name}</p>
              <h6>{author.published_date}</h6>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details?.length > 200 ? (
              <span>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </span>
            ) : (
              <span>{details}</span>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div>
            <span>{rating.number}</span>
            <FaStar className="text-warning"></FaStar>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
