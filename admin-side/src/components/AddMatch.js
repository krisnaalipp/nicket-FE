import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddMatch({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [data, setData] = useState({
    opponents: "",
    startDate: "",
    availableSeats: 0,
  });

  function handleInput(e) {
    console.log(e.target.name, e.target.value, "===set data");
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data, "==== data");
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
