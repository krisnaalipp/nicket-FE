import { useState } from "react";
import { Card, Button, Form, ListGroup } from "react-bootstrap";

export default function MatchesCard({ data, updateResult }) {
  const [editResult, setEditResult] = useState({
    scoreLeft: "",
    scoreRight: "",
  });

  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    console.log("masuik edit");
    // console.log(edit);
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    if (editResult.scoreLeft && editResult.scoreRight) {
      updateResult({
        variables: {
          updateResultId: data.id,
          inputResult: {
            result: `${editResult.scoreLeft}-${editResult.scoreRight}`,
          },
        },
      });
    }
    console.log(editResult, "===ini value ");
  };

  function handleInput(e) {
    setEditResult({
      ...editResult,
      [e.target.name]: e.target.value,
    });
    console.log(setEditResult, "====edit result");
  }

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

  function getStylingLeft(result) {
    if (result === "Not Started") {
      return { color: "grey" };
    } else {
      if (result[0] > result[2]) {
        return { color: "green" };
      } else if (result[0] < result[2]) {
        return { color: "red" };
      } else {
        return { color: "blue" };
      }
    }
  }
  function getStylingRight(result) {
    if (result === "Not Started") {
      return { color: "grey" };
    } else {
      if (result[0] > result[2]) {
        return { color: "red" };
      } else if (result[0] < result[2]) {
        return { color: "green" };
      } else {
        return { color: "blue" };
      }
    }
  }

  return (
    <Card bg="white" text={"dark"} className="shadow-lg mb-2">
      <div className="d-flex justify-content-end">
        {getLabel(data?.startDate, data?.availableSeats)}
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-4 ">
          <div className=" d-flex justify-content-center py-1">
            <img
              src="/logo.png"
              alt="logo"
              style={{ width: "140px", height: "140px" }}
              className="mx-5"
            />
          </div>
          <div className=" d-flex justify-content-center">
            <h2>Eagle F.C</h2>
          </div>
        </div>
        <div>
          <h2>VS</h2>
        </div>
        <div className="col-4 ">
          <div className=" d-flex justify-content-center py-4">
            <img
              src={data?.opponentLogo}
              alt="logoopponent"
              style={{ width: "100px", height: "100px" }}
              className="mx-5"
            />
          </div>
          <div className="">
            <h2 className="d-flex align-items-end justify-content-center">
              {data?.opponent}
            </h2>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="">
          {isEdit ? (
            <Form
              onSubmit={handleSubmit}
              className="d-flex justify-content-end"
              //   style={{ display: "flex", justifyContent: "end" }}
            >
              <Form.Control
                type="number"
                name="scoreLeft"
                value={editResult.scoreLeft}
                onChange={handleInput}
                className="mx-3"
                style={{ width: "35%" }}
              />
              <Form.Control
                type="number"
                name="scoreRight"
                value={editResult.scoreRight}
                onChange={handleInput}
                className="mx-3"
                style={{ width: "35%" }}
              />
              <Button type="submit" className="mx-2" style={{ width: "10%" }}>
                Submit
              </Button>
            </Form>
          ) : (
            <div
              className=" justify-content-center border-top pt-3"
              style={{ display: "flex" }}
              onDoubleClick={handleEdit}
            >
              <div className="mx-4 col-4  justify-content-center">
                <h2 style={getStylingLeft(data.result)} className="text-center">
                  {data.result !== "Not Started" ? data.result[0] : "TBD"}
                </h2>
              </div>
              {/* <div className="">
                <h2
                  style={
                    data.result === "Not Started"
                      ? { color: "grey" }
                      : { color: "black" }
                  }
                >
                  -
                </h2>
              </div> */}
              <div className="mx-4 col-4  justify-content-center">
                <h2
                  style={getStylingRight(data.result)}
                  className="text-center"
                >
                  {data.result !== "Not Started" ? data.result[2] : "TBD"}
                </h2>
              </div>
            </div>
          )}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text>{showDate(data.startDate)}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
