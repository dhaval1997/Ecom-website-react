import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const contactDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    try {
      const response = await fetch(
        "https://react-http-62834-default-rtdb.firebaseio.com/contactDetails.json",
        {
          method: "POST",
          body: JSON.stringify(contactDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(!response.ok){
        throw new Error("Error storing data")
      }
      const data = await response.json();
      console.log("Data has been successfully stored", data);
    } catch(error) {
        console.error("Error while storing data", error);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" ref={emailRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact no.</Form.Label>
        <Form.Control type="number" placeholder="Enter Number" ref={phoneRef} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Contact;
