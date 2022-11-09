import { Modal, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getUpcomingMatch } from "../config/queries";
import { GiWhistle } from "react-icons/gi";
import BarLoader from "react-spinners/BarLoader";
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

export default function HomeModal(props) {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(getUpcomingMatch);

  const nextMatch = data?.getOneMatch;

  if (error) {
    return <h1>Error Data!</h1>;
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {loading ? (
        <BarLoader style={{ textAlign: "center" }} color="#36d7b7" />
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <div
                className="row"
                style={{
                  textAlign: "center",
                  width: "29.5rem",
                }}
              >
                <div className="col-6 mx-auto" style={{ marginTop: "0.5rem" }}>
                  <h4>Upcoming Match</h4>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div
                className="col-5"
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
                  alt="logo"
                  style={{
                    width: "5rem",
                    height: "5rem",
                  }}
                />
                <h5>Eagle F.C</h5>
              </div>
              <div
                className="col-2"
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h1>V</h1>
              </div>
              <div
                className="col-5"
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  src={nextMatch?.opponentLogo}
                  alt="logo"
                  style={{
                    width: "5rem",
                    height: "5rem",
                  }}
                />
                <h5>{nextMatch?.opponent}</h5>
              </div>
            </div>
            <div className="row" style={{ height: "5rem" }}>
              <div className="col-8 mx-auto" style={{ textAlign: "center" }}>
                <GiWhistle
                  style={{
                    width: "23%",
                    height: "23%",
                  }}
                />
                <p>{toLocalDate(nextMatch?.startDate)} WIB</p>
                <p style={{ marginTop: "-1rem" }}>
                  Available Seat: <b>{nextMatch?.availableSeats}</b>
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-8 mx-auto" style={{ textAlign: "center" }}>
                <Button
                  className="btn btn-dark"
                  onClick={() => navigate("/ticket/" + nextMatch.id)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
