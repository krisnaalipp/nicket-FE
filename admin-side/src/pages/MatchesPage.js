import { Container, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import AddMatch from "../components/AddMatch";
import { useQuery } from "@apollo/client";
import { GET_MATCHES } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

export default function Matches() {
  const { data, loading } = useQuery(GET_MATCHES);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  function showDate(date) {
    return new Date(date).toLocaleString();
  }

  function calculateTime(date) {
    return new Date(date).getTime();
  }

  function getLabel(date, seats) {
    if (calculateTime(date) - calculateTime(new Date()) <= 0) {
      return (
        <h6
          className="text-end m-2 p-2 text-white"
          style={{
            borderRadius: 10,
            backgroundColor: "gray",
          }}
        >
          ----- Ended -----
        </h6>
      );
    } else {
      return (
        <h6
          className="text-end m-2 p-2 text-white"
          style={{
            borderRadius: 10,
            backgroundColor: "green",
          }}
        >
          223/{seats} SOLD
        </h6>
      );
    }
  }

  return (
    <Container className="m-4">
      <Card
        style={{
          borderRadius: 10,
          padding: 1,
          width: "100%",
        }}
      >
        <h2 className="d-flex justify-content-center mt-3">
          Matches and Fixtures
        </h2>
        <div className="d-flex justify-content-center">
          <Button className="btn-success m-4 p-3" onClick={handleShow}>
            <b>ADD NEW MATCHES</b>
          </Button>
          <AddMatch show={show} setShow={setShow} />
        </div>
        <div className="row p-3 m-3">
          <div className="mb-3">
            <div className="">
              <Container>
                {loading ? (
                  <FadeLoader />
                ) : (
                  <div className="row">
                    {data.getMatch?.map((el, i) => {
                      return (
                        <Card
                          bg="white"
                          text={"dark"}
                          className="shadow-lg mb-2"
                        >
                          <div className="d-flex justify-content-end">
                            {getLabel(el.startDate, el.availableSeats)}
                            {/* {calculateTime(el.startDate) -
                              calculateTime(new Date()) <=
                            0 ? (
                              <h6
                                className="text-end m-2 p-2 text-white"
                                style={{
                                  borderRadius: 10,
                                  backgroundColor: "gray",
                                }}
                              >
                                ----- Ended -----
                              </h6>
                            ) : (
                              <h6
                                className="text-end m-2 p-2 text-white"
                                style={{
                                  borderRadius: 10,
                                  backgroundColor: "green",
                                }}
                              >
                                223/{el.availableSeats} SOLD
                              </h6>
                            )} */}
                          </div>
                          <h2 className="d-flex justify-content-center mt-2">
                            Eagle F.C vs {el.opponent}
                          </h2>
                          <Card.Body>
                            <Card.Title className="text-center">
                              <h2>{el.result}</h2>
                            </Card.Title>
                            <div className="d-flex justify-content-between">
                              <Card.Text>{showDate(el.startDate)}</Card.Text>
                              <Button variant="info">Edit Result</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </Container>
            </div>
            {/* <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "gray" }}
                >
                  ----- Ended -----
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>12 - 09 - 2022</Card.Text>
                  <Button variant="info">Edit Result</Button>
                </div>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "gray" }}
                >
                  ----- Ended -----
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "gray" }}
                >
                  ----- Ended -----
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "gray" }}
                >
                  ----- Ended -----
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "gray" }}
                >
                  ----- Ended -----
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "red" }}
                >
                  ---SOLD OUT---
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "red" }}
                >
                  ---SOLD OUT---
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card bg="white" text={"dark"} className="shadow-lg mb-2">
              <div className="d-flex justify-content-end">
                <h6
                  className="text-end m-2 p-2 text-white"
                  style={{ borderRadius: 10, backgroundColor: "green" }}
                >
                  223/350 SOLD
                </h6>
              </div>
              <h2 className="d-flex justify-content-center mt-2">
                Eagle F.C vs (Nama tim)
              </h2>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2> 4 - 0 </h2>
                </Card.Title>
                <Card.Text>12 - 09 - 2022</Card.Text>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </Card>
    </Container>
  );
}
