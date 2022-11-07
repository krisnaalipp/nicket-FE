import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddMatch({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [data, setData] = useState({
    opponents: "",
    startDate: "",
    availableSeats: "",
  });

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(setData, "=== set data");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data, "==== data");
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Match</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="opponentsname">
            <Form.Label>Opponents</Form.Label>
            <Form.Control
              name="opponents"
              value={data.opponents}
              onChange={handleInput}
              type="text"
              placeholder="Team Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="opponentsname">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              name="imgUrl"
              value={data.imgUrl}
              onChange={handleInput}
              type="text"
              placeholder="Team Logo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="startdate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              name="startDate"
              value={data.startDate}
              onChange={handleInput}
              type="date"
              placeholder="Start Date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="availableseat">
            <Form.Label>Available Seats</Form.Label>
            <Form.Control
              name="availableSeats"
              value={data.availableSeats}
              onChange={handleInput}
              type="number"
              placeholder="Available Seats"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
