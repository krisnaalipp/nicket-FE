import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function toLocalDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    hour12: false,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const arr = [
  {
    price: 10000,
    amount: 3,
  },
  {
    price: 10000,
    amount: 3,
  },
  {
    price: 10000,
    amount: 3,
  },
  {
    price: 10000,
    amount: 3,
  },
  {
    price: 10000,
    amount: 3,
  },
];

const total = 0;
arr.forEach((el) => {
  total = el.price * amount;
});
/*
Statistic 1 : GET ALL MATCH TAPI YANG DIBANDINGIN TOTAL TRANSACTION
STATISTIC 2 : GET ALL MATCH TAPI YANG DIBANDINGIN TOTAL AMOUNT
STATISTIC 3 : GET ONE MATCH NGITUNG PERSENTASE TOTAL AMOUNT / 500 * 100
STATISTIC 4 : GET ALL MATCH NGITUNG TOTAL PENDAPATAN AMOUNT * 100
 */

function MatchCard({ match }) {
  const navigate = useNavigate();

  let content = null;

  if (match?.availableSeats.length === 0) {
    content = "SOLD - OUT";
  } else {
    content = "Buy Ticket";
  }

  return (
    <>
      <div className="col-10 mx-auto" style={{ marginBottom: "2rem" }}>
        <Card
          body
          className="shadow-lg card-litle-zoom"
          style={{
            border: 0,
          }}
        >
          <div className="row">
            <div className="col-5">
              <h6 className="card-title" style={{ textAlign: "left" }}>
                Football League
              </h6>
            </div>
            <div className="col-2">
              <h6 className="card-title" style={{ textAlign: "center" }}>
                {toLocalDate(match.startDate)} WIB
              </h6>
            </div>
            <div className="col-5">
              <h6 className="card-title" style={{ textAlign: "right" }}>
                Gelora Bung Karno
              </h6>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
              <Card.Img
                style={{
                  width: "30%",
                  height: "100%",
                }}
                className="img-fluid float-start"
                src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
              />
              <h2 className="text-center" style={{ marginTop: "10%" }}>
                Eagle F.C
              </h2>
            </div>
            <div className="col-2">
              {match.result !== "Not Started" ? (
                <h1 className="text-center" style={{ marginTop: "21%" }}>
                  {match.result}
                </h1>
              ) : (
                <h5 className="text-center" style={{ marginTop: "21%" }}>
                  {match.result}
                </h5>
              )}
            </div>
            <div className="col-5">
              <Card.Img
                style={{
                  width: "25%",
                  height: "80%",
                  marginTop: "5%",
                  marginRight: "3%",
                }}
                className="img-fluid float-end"
                src={match.opponentLogo}
              />
              <h2 className="text-center" style={{ marginTop: "10%" }}>
                {match.opponent}
              </h2>
            </div>
          </div>

          <div className="row">
            <div
              className="col-2 mx-auto"
              style={{
                textAlign: "center",
              }}
            >
              {match.result !== "Not Started" ? (
                <h5
                  style={{
                    backgroundColor: "rgba(199, 198, 198, 0.69)",
                    padding: "1%",
                    borderRadius: "0.5rem",
                  }}
                >
                  Ended
                </h5>
              ) : (
                <button
                  className="btn btn-dark"
                  onClick={() => navigate("/ticket/" + match.id)}
                >
                  {content}
                </button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default MatchCard;
