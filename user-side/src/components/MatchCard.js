import Card from "react-bootstrap/Card";

function MatchCard({ match }) {
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
                {match.startDate}
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
              <h1 className="text-center" style={{ marginTop: "21%" }}>
                {match.result}
              </h1>
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
                <h2>= Ended =</h2>
              ) : (
                <button className="btn btn-dark">Buy Ticket</button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default MatchCard;
