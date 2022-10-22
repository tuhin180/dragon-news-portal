import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthUserContext } from "../Context/UserContext";
const Profile = () => {
  const { user } = useContext(AuthUserContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL.current.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Youser Name</Form.Label>
        <Form.Control
          readOnly
          defaultValue={name}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>photoUrl</Form.Label>
        <Form.Control
          ref={photoURLRef}
          readOnly
          defaultValue={user?.photoURL}
          type="text"
          placeholder="Photo Url"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
