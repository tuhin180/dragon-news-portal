import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Context/UserContext";

import LeftsideNav from "./LeftsideNav";
import { toast } from "react-toastify";
const Header = () => {
  const { user, systemLogOut } = useContext(AuthUserContext);

  // logOut function

  const handleLogOut = () => {
    systemLogOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("logout successfully", { autoClose: 5000 });
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    <>
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Nav.Link to="/">{user?.displayName}</Nav.Link>
                  <Link>
                    <Button onClick={handleLogOut} variant="primary">
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link className="me-2" to="/login">
                    <Button variant="outline-primary">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline-primary">Register</Button>
                  </Link>
                </>
              )}
            </Nav>
            <div className=" d-lg-none ">
              <LeftsideNav></LeftsideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
