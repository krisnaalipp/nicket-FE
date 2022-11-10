import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import { GiSoccerBall, GiWhistle } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getUpcomingMatch } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

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

function DescriptionCard() {
  const { loading, error, data } = useQuery(getUpcomingMatch);
  const nextMatch = data?.getOneMatch;
  const navigate = useNavigate();

  if (error) {
    return <h1>Error Data!</h1>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 mx-auto">
          <Card
            body
            className="shadow-lg"
            style={{
              border: 0,
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <HiOutlineTicket
                style={{
                  width: "10%",
                  height: "10%",
                }}
              />

              <RiArrowDropLeftLine
                style={{
                  width: "5%",
                  height: "5%",
                }}
              />

              <GiSoccerBall
                style={{
                  width: "8%",
                  height: "8%",
                }}
              />

              <RiArrowDropRightLine
                style={{
                  width: "5%",
                  height: "5%",
                }}
              />

              <ImNewspaper
                style={{
                  width: "9%",
                  height: "9%",
                }}
              />
            </div>
            <hr />
            <p
              style={{
                textAlign: "justify",
              }}
            >
              Welcome to the official website of Eagle Football Club. A website
              about football where you can read news about football, find Eagle
              F.C fixtures or buy match tickets online. Information about
              football news provided by us is the most up to date. Besides the
              fixtures, you can also view the results of Eagle F.C You can
              easily and safely buy tickets for Eagle F.C matches online
              anywhere anytime. Purchasing tickets online with a one-person
              one-seat system is expected to avoid overload capacity in the
              stadium. from football by football and for football because
              football can bring it all together.
            </p>
          </Card>
        </div>
        <div className="col-4 mx-auto">
          <Card
            body
            className="shadow-lg"
            style={{
              border: 0,
            }}
          >
            {loading ? (
              <div className="row">
                <div
                  className="col-2 mx-auto"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <FadeLoader color="#36d7b7" />
                </div>
              </div>
            ) : (
              <>
                <h4>Next Game</h4>
                <hr />
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
                    <h6>Eagle F.C</h6>
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
                    <h6>{nextMatch?.opponent}</h6>
                  </div>
                </div>
                <hr />
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <GiWhistle
                    style={{
                      width: "7%",
                      height: "7%",
                    }}
                  />
                  <p>{toLocalDate(nextMatch?.startDate)} WIB</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/ticket/" + nextMatch.id)}
                  >
                    Buy Ticket
                  </button>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
