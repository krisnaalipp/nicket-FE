import { Card, Container } from "react-bootstrap";
import ChartPreviousMatch from "../components/ChartPreviousMatch";
import AnalyticsMonthly from "../components/AnalyticsMonthly";
import UpcomingMatchChart from "../components/UpcomingMatchChart";
import SalesChart from "../components/SalesChart";
import { useQuery } from "@apollo/client";
import { GET_MATCHES, GET_TRANSACTIONS } from "../config/queries";
import { useState } from "react";

export default function HomePage() {
  const { data: matches, loading: loadingmatch } = useQuery(GET_MATCHES);
  const labels = new Array(30).fill("").map((_, i) => i + 1);
  const data2 = {
    labels,
    datasets: [
      {
        label: "Previous Matches",
        data: [500, 300, 200, 1000, 400, 600, 700],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  let past = new Date();
  let future = new Date();
  future.setDate(future.getDate() + 30);
  past.setDate(past.getDate() - 1);

  // console.log(matches, loadingmatch);
  // if (!loadingmatch) {
  const getPreviousMatch = matches?.getMatch?.filter((el) => {
    return el.result !== "Not Started";
  });

  const getUpcomingMatch = matches?.getMatch?.filter((el) => {
    return el.result === "Not Started";
  });

  // const { data, loading } = useQuery(GET_TRANSACTIONS, {
  //   variables: {
  //     getTransactionByMatchId: getPreviousid,
  //   },
  // });

  console.log(getPreviousMatch, "===== before");
  console.log(getUpcomingMatch, "===== after");
  // }

  return (
    <Container className="p-1 m-5">
      <div style={{ width: "100%" }}>
        <div className="row m-3 ">
          <div className="col-6">
            <Card
              bg="dark"
              text={"white"}
              style={{ width: "100%" }}
              className="mb-2 "
            >
              <Card.Header className="d-flex justify-content-center">
                Previous Match Total Sales Percentage
              </Card.Header>
              <Card.Body>
                <Card.Title>January - February</Card.Title>
                {/* <Card.Title>Eagle FC VS Liverpool</Card.Title> */}
                <ChartPreviousMatch data={data2} />
                {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card
              bg="dark"
              text={"white"}
              style={{ width: "100%" }}
              className="mb-2"
            >
              <Card.Header className="d-flex justify-content-center">
                Upcoming Match Total Sales Percentage
              </Card.Header>
              <Card.Body>
                <Card.Title>January - February</Card.Title>
                {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
                <UpcomingMatchChart data={getUpcomingMatch} />
                {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          {/* <h1 className="d-flex justify-content-center">ANALYTICS</h1> */}
          <Card bg="dark" text={"white"} style={{ width: "100%" }}>
            <Card.Header className="d-flex justify-content-center">
              Total Sales Analytics Data
            </Card.Header>
            <Card.Body>
              <Card.Title>January - February</Card.Title>
              {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
              {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
              <div>
                <AnalyticsMonthly />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          {/* <h1>Sales</h1> */}
          <Card bg="dark" text={"white"} style={{ width: "100%" }}>
            <Card.Header className="d-flex justify-content-center">
              Next Match Total Sales
            </Card.Header>
            <Card.Body>
              <Card.Title>Nama Team</Card.Title>
              {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
              <SalesChart />
              {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
