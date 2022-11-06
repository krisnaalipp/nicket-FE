import { Container, Card, Button } from "react-bootstrap";
export default function Matches() {
  return (
    <Container className="m-4">
      <Card
        style={{
          borderRadius: 10,
          padding: 1,
          width: "85rem",
        }}
      >
        <h2 className="d-flex justify-content-center mt-3">
          Matches and Fixtures
        </h2>
        <div className="d-flex justify-content-center">
          <Button className="btn-success m-4 p-3">
            <b>ADD NEW MATCHES</b>
          </Button>
        </div>
        <div className="row p-3 m-3">
          <div className="mb-3">
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
            </Card>
          </div>
        </div>
      </Card>
    </Container>
  );
}
