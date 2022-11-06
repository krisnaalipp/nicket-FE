import { Card, Container } from "react-bootstrap";
export default function HomePage() {
  return (
    <Container className="p-1 m-5">
      <div>
        <div className="row m-3 ">
          <div className="col-6">
            <Card
              bg="dark"
              text={"white"}
              style={{ width: "39rem" }}
              className="mb-2 "
            >
              <Card.Header className="d-flex justify-content-center">
                Previous Match Total Sales Percentage
              </Card.Header>
              <Card.Body>
                <Card.Title>Eagle FC VS Liverpool</Card.Title>
                <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card
              bg="dark"
              text={"white"}
              style={{ width: "40rem" }}
              className="mb-2"
            >
              <Card.Header className="d-flex justify-content-center">
                Upcoming Match Total Sales Percentage
              </Card.Header>
              <Card.Body>
                <Card.Title>EAGLE FC - Watford</Card.Title>
                <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h1 className="d-flex justify-content-center">ANALYTICS</h1>
          <Card bg="dark" text={"white"} style={{ width: "100%", height: 370 }}>
            <Card.Header className="d-flex justify-content-center">
              <h2>January - February </h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>EAGLE FC - Watford</Card.Title>
              <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <h1>Sales</h1>
          <Card bg="dark" text={"white"} style={{ width: "100%", height: 370 }}>
            <Card.Header className="d-flex justify-content-center">
              <h2>January - February </h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>EAGLE FC - Watford</Card.Title>
              <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}