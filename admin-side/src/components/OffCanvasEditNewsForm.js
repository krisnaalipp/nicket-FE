import { useState } from "react";
import { Form, Offcanvas, Button, FloatingLabel } from "react-bootstrap";

export default function OffcanvasFormNewsEdit(props) {
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
    // console.log(e.target.name, e.target.value, "====dari edit news");
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log("submit edit");
    // console.log(data, "====dari edit news");
  }
  return (
    <Offcanvas {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit News</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="m-3">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={data.title}
              onChange={inputHandler}
              type="text"
              placeholder="Lorem Ipsum.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Img Url</Form.Label>
            <Form.Control
              name="imgUrl"
              value={data.imgUrl}
              onChange={inputHandler}
              type="text"
              placeholder="https://picture.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                name="description"
                value={data.description}
                onChange={inputHandler}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "150px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              value={data.tags}
              onChange={inputHandler}
              type="text"
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
