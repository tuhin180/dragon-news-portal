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
      .then(() => {
        toast.success("logout successfully", { autoClose: 5000 });
      })
      .catch((error) => {
        // An error happened.
        console.error(error.errorMessage);
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
                  <Link className="me-2" to="/profile">
                    <Button variant="outline-primary">
                      {user?.displayName}
                    </Button>
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "30px" }}
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </Link>
                  <Button
                    className="ms-2"
                    onClick={handleLogOut}
                    variant="primary"
                  >
                    Logout
                  </Button>
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
