import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
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
import { AuthUserContext } from "../Context/UserContext";
import RightNavCarousel from "./RightNavCarousel";

const RightsideNav = () => {
  const { signInWithGoogle } = useContext(AuthUserContext);
  const googleProvider = new GoogleAuthProvider();

  // google signin handler

  const handleGoogleLogin = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogin}
          className="mb-2"
          variant="outline-primary"
        >
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
