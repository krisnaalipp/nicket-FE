import { Container, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import AddMatch from "../components/AddMatch";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MATCHES } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";
import MatchesCard from "../components/MatchesCard";
import { EDIT_RESULT } from "../config/mutations";
import Swal from "sweetalert2";

export default function Matches() {
  const { data, loading } = useQuery(GET_MATCHES);
  // [updateFn, result]
  const [updateResult, { data: edit, loading: loadingEdit, error }] =
    useMutation(EDIT_RESULT, {
      refetchQueries: [
        { query: GET_MATCHES }, // DocumentNode object parsed with gql
      ],
      onCompleted: (data) => {
        console.log("berhasil edit result", data);
        Swal.fire("Good job!", "You have edited the Result!", "success");
      },
      onError: (error) => {
        console.log(error);
        Swal.fire("Error!", "Something is wrong!", "error");
      },
    });
  //modal add match
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  // modal edit result

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
          <Button
            className=" m-4 p-3 shadow"
            style={{ color: "white" }}
            onClick={handleShow}
          >
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
                    {data?.getMatch?.map((el, i) => {
                      return (
                        <MatchesCard
                          updateResult={updateResult}
                          data={el}
                          key={i}
                        />
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
