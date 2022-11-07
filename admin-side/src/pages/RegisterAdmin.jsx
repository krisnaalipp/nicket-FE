import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { REGISTER } from "../config/mutations";

export default function RegisterAdmin() {
  const [item, setItem] = useState({
    username: "",
    email: "",
    password: "",
  });
  function inputHandler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name, e.target.value, "====dari login page");
  }

  const [submitHandler, { data, loading, error }] = useMutation(REGISTER, {
    onCompleted: (data) => {
      console.log("berhasil register", data);
    },
  });

  if (error) return <Alert>Submission error! ${error.message}</Alert>;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className=" d-flex justify-content-center align-items-center py-5">
        <div className="border-end">
          <img
            src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
            alt="logo"
            width={"100%"}
          />
        </div>
        <div className=" p-5">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler({
                variables: {
                  inputAdmin: item,
                },
              });
              setItem({
                username: "",
                email: "",
                password: "",
              });
            }}
          >
            <div className="mb-5 p-2">
              <h1>Register Admin</h1>
            </div>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                value={item.username}
                onChange={inputHandler}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={item.email}
                onChange={inputHandler}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={item.password}
                onChange={inputHandler}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
