import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserContext } from "../Context/UserContext";

const Login = () => {
  const { userLoginIn, passwordResetSystem } = useContext(AuthUserContext);

  const [email, setEmail] = useState("");
  const [errors, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login use
    userLoginIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(from, { replace: true });
        setError("");
        console.log(user);
        toast.success("loged in succesfull", { autoClose: 5000 });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error("password dosent match", errors, { autoClose: 5000 });
      });
  };
  const handleResetPassword = () => {
    passwordResetSystem(email)
      .then((result) => {
        const user = result.user;
        // Password reset email sent!
        toast.success("reset password link has been sent to your email", {
          autoClose: 5000,
        });
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.errorMessage, { autoClose: 5000 });
        // ..
      });
  };
  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleemail}
            name="email"
            type="email"
            placeholder="Enter email"
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
          />
        </Form.Group>
        <p>
          Did you forget Your Password
          <span onClick={handleResetPassword}>
            <Link className="ms-1">reset Password</Link>
          </span>
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
