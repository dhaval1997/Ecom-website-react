import React, { useState, useRef, useContext } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import AuthContext from "./auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpYRWWzvVLyPSxqZxnnuKKgFYMW_XkCy4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpYRWWzvVLyPSxqZxnnuKKgFYMW_XkCy4";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        authCtx.login(data.idToken);
        authCtx.userEmail(data.email);
        console.log('auth email:', authCtx.userEmail);
        console.log('auth login:', authCtx.login);
      } else {
        let errorMessage = "Authentication failed!";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setIsLoading(false);
      alert("Authentication failed. Please try again.");
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Email Id:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            ref={emailInputRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            ref={passwordInputRef}
            required
          />
        </Form.Group>
        {!isLoading && (
          <Button type="submit" variant="dark">
            {isLogin ? "Login" : "Create Account"}
          </Button>
        )}
        {isLoading && <p>Loading..</p>}
        <Button variant="dark" type="button" onClick={switchAuthModeHandler}>
          {isLogin ? "Create new account" : "Login with an existing account"}
        </Button>
      </Form>
    </section>
  );
};

export default AuthForm;
