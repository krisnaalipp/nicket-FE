import { useState } from "react";
import { Form, Offcanvas, Button, FloatingLabel } from "react-bootstrap";

export default function AddNews(props) {
  const [data, setData] = useState({
    title: "",
    imgUrl: "",
    description: "",
    tags: "",
  });
  function inputHandler(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data, "====dari add news");
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("submit add");
  }
  return (
    <Offcanvas {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add News</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="m-3">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={data.title}
              onChange={inputHandler}
              type="text"
              placeholder="Lorem Ipsum.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imgurl">
            <Form.Label>Img Url</Form.Label>
            <Form.Control
              name="imgUrl"
              value={data.imgUrl}
              onChange={inputHandler}
              type="text"
              placeholder="https://picture.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={data.description}
              onChange={inputHandler}
              type="textarea"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              value={data.tags}
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
