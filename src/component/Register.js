import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserContext } from "../Context/UserContext";

const Register = () => {
  const { createUser, updateUserProfile, emailVerification } =
    useContext(AuthUserContext);
  const [accepted, setAccepted] = useState(false);

  // register function
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    // 1.create user
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        toast.success("usercreated successfully", { autoClose: 8000 });

        // ...

        // 2.update Profile
        updateUserProfile(name, photoUrl)
          .then(() => {
            // Profile updated!
            toast.success("Profile Updated", { autoClose: 5000 });
            // ...
            emailVerification()
              .then(() => {
                <Navigate to="/login"></Navigate>;
                toast.success(
                  "email verifiaction send to yor account please check your profile",
                  { autoClose: 5000 }
                );
              })
              .catch((error) => {
                toast.error(error.errorMessage, { autoClose: 5000 });
              });
          })
          .catch((error) => {
            // An error occurred
            toast.error(error.errorMessage, { autoClose: 5000 });
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, { autoClose: 5000 });
        // ..
      });
  };
  const handleCheckbox = (e) => {
    setAccepted(e.target.checked);
  };
  return (
    <div>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoUrl"
            type="text"
            placeholder="Enter your Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleCheckbox}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">terms</Link> and conditions
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
