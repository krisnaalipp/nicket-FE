import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Form, Offcanvas, Button, FloatingLabel, Alert } from "react-bootstrap";
import { ADD_NEWS } from "../config/mutations";
import { GET_NEWS } from "../config/queries";

export default function AddNews(props) {
  const [item, setItem] = useState({
    title: "",
    imgUrl: "",
    description: "",
    tags: "",
  });

  function inputHandler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name, e.target.value, "====dari add news");
  }

  const [submitHandler, { data, loading, error }] = useMutation(ADD_NEWS, {
    refetchQueries: [
      { query: GET_NEWS }, // DocumentNode object parsed with gql
    ],
    onCompleted: (data) => {
      console.log("berhasil add news", data);
    },
  });

  if (error) return <Alert>Submission error! ${error.message}</Alert>;

  return (
    <Offcanvas {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add News</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="m-3">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Masuk submit button");
            console.log(item, "++++");
            submitHandler({
              variables: {
                inputNews: item,
              },
            });
            props.setShow(false);
            setItem({
              title: "",
              imgUrl: "",
              description: "",
              tags: "",
            });
          }}
        >
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={item.title}
              onChange={inputHandler}
              type="text"
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imgurl">
            <Form.Label>Img Url</Form.Label>
            <Form.Control
              name="imgUrl"
              value={item.imgUrl}
              onChange={inputHandler}
              type="text"
              placeholder="Image Url (e.g: https://picture.com)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={item.description}
              onChange={inputHandler}
              type="textarea"
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              value={item.tags}
              onChange={inputHandler}
              type="text"
              placeholder="Tags"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
