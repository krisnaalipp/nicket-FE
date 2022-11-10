import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { LOGIN_ADMIN } from "../config/mutations";

export default function LoginPage() {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    email: "",
    password: "",
  });
  function inputHandler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

    // console.log(e.target.name, e.target.value, "====dari login page");
  }

  const [submitHandler, { data, loading, error }] = useMutation(LOGIN_ADMIN, {
    onCompleted: (data) => {
      // console.log("berhasil login", data);
      localStorage.setItem("access_token", data.loginAdmin.access_token);
      navigate("/");
    },
  });

  if (error) return <Alert>Submission error! ${error.message}</Alert>;

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5"
      style={{ width: "100%", height: "92vh" }}
    >
      <div className=" col-4 border shadow rounded p-5">
        <div className="d-flex justify-content-center">
          <img
            src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
            alt="logo"
            width={"60%"}
          />
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler({
              variables: {
                inputLogin: item,
              },
            });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={item.email}
              onChange={inputHandler}
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
  );
}
