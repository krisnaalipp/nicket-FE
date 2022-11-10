import { Card, Container } from "react-bootstrap";
import ChartPreviousMatch from "../components/ChartPreviousMatch";
import AnalyticsMonthly from "../components/AnalyticsMonthly";
import UpcomingMatchChart from "../components/UpcomingMatchChart";
import SalesChart from "../components/SalesChart";
import { useQuery } from "@apollo/client";
import { GET_MATCHES, GET_NEWEST_MATCH } from "../config/queries";
import { RiLoaderLine } from "react-icons/ri";

export default function HomePage() {
  const { data: matches, loading: loadingMatch } = useQuery(GET_MATCHES);
  const { data: oneMatch, loading: loadingOne } = useQuery(GET_NEWEST_MATCH);

  const matchesName = matches?.getMatch?.map((el) => {
    return el.opponent;
  });
  // console.log(matches, "====");

  const transaction = matches?.getMatch?.map((el) => {
    return el.Transactions.length;
  });
  // console.log(transaction, "=====transaction");

  let totalAmount = matches?.getMatch?.map((el) => {
    let total = 0;
    el.Transactions?.forEach((data) => {
      total += data.amount;
    });
    return total;
  });
  let totalPrice = matches?.getMatch?.map((el) => {
    let total = 0;
    el.Transactions?.forEach((data) => {
      total += data.ticketPrice * data.amount;
    });
    return total;
  });

  // console.log(matches?.getMatch);
  // console.log(totalAmount, "=====total aount");
  // console.log(totalPrice, "=====total price");

  const labels = matchesName;
  const dataTransactions = {
    labels,
    datasets: [
      {
        label: "Transactions per Match",
        data: transaction,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataAmount = {
    labels,
    datasets: [
      {
        label: "Total Amount per Match",
        data: totalAmount,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const dataPrice = {
    labels,
    datasets: [
      {
        label: "Total Daily Sales",
        data: totalPrice,
        backgroundColor: "yellow",
      },
    ],
  };

  const dataAvailableSeats = oneMatch?.getOneMatch?.availableSeats;
  // console.log(dataAvailableSeats, "===data seats");

  const dataSeats = {
    labels: ["Sold", "Available"],
    datasets: [
      {
        label: "# of Votes",
        data: [500 - dataAvailableSeats, dataAvailableSeats],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  if (loadingMatch || loadingOne) {
    return (
      <RiLoaderLine
        size={50}
        style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
      />
    );
  }

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
                Total Transactions Statistics
              </Card.Header>
              <Card.Body>
                <Card.Title>Based on Matches</Card.Title>
                {/* <Card.Title>Eagle FC VS Liverpool</Card.Title> */}
                <ChartPreviousMatch data={dataTransactions} />
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
                Amount Tickets Sold Statistics
              </Card.Header>
              <Card.Body>
                <Card.Title>Based on Matches</Card.Title>
                {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
                <UpcomingMatchChart data={dataAmount} />
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
              <Card.Title>Based on Matches</Card.Title>
              {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
              {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
              <div>
                <AnalyticsMonthly data={dataPrice} />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          {/* <h1>Sales</h1> */}
          <Card bg="dark" text={"white"} style={{ width: "100%" }}>
            <Card.Header className="d-flex justify-content-center">
              Upcoming Match Sales Report
            </Card.Header>
            <Card.Body>
              <Card.Title>Seats Remaining</Card.Title>
              {/* <Card.Title>EAGLE FC - Watford</Card.Title> */}
              <SalesChart data={dataSeats} />
              {/* <Card.Text>lorem ipsum dkk (ChartJS)</Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
