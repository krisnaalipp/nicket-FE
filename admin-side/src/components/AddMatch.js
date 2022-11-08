import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ADD_MATCH } from "../config/mutations";
import { useMutation } from "@apollo/client";
import { GET_MATCHES } from "../config/queries";

export default function AddMatch({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [data, setData] = useState({
    opponent: "",
    opponentLogo: "",
    startDate: "",
  });

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const [handleSubmit, { data: dataAdd, loading: addLoading, error }] =
    useMutation(ADD_MATCH, {
      refetchQueries: [
        { query: GET_MATCHES }, // DocumentNode object parsed with gql
      ],
      onCompleted: (data) => {
        console.log("berhasil add matches", data);
      },
    });
  console.log(data, "=== set data");

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (data.opponent && data.opponentLogo && data.startDate) {
            console.log(data, "====data dari handle submit");
            handleSubmit({
              variables: {
                inputMatch: data,
              },
            });
          }
          setData({
            opponent: "",
            opponentLogo: "",
            startDate: "",
          });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Match</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="opponentsname">
            <Form.Label>Opponents</Form.Label>
            <Form.Control
              name="opponent"
              value={data.opponent}
              onChange={handleInput}
              type="text"
              placeholder="Team Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="opponentsname">
            <Form.Label>Opponent Logo</Form.Label>
            <Form.Control
              name="opponentLogo"
              value={data.opponentLogo}
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