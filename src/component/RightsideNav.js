import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import RightNavCarousel from "./RightNavCarousel";

const RightsideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub />
          Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-2">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaInstagram />
            Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            ,<FaWhatsapp />
            Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaLinkedin />
            Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <RightNavCarousel></RightNavCarousel>
      </div>
    </div>
  );
};

export default RightsideNav;
