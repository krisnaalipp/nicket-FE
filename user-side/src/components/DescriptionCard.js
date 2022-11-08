import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import { GiSoccerBall, GiWhistle } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getUpcomingMatch } from "../config/queries";

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              facilis aliquid voluptas esse fugiat blanditiis, ab nisi, amet
              tempora exercitationem repellat non. Modi eaque at, cumque
              voluptas voluptatum ea nobis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet facilis aliquid voluptas
              esse fugiat blanditiis, ab nisi, amet tempora exercitationem
              repellat non. Modi eaque at, cumque voluptas voluptatum ea nobis.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              facilis aliquid voluptas esse fugiat blanditiis, ab nisi, amet
              tempora exercitationem repellat non. Modi eaque at, cumque
              voluptas voluptatum ea nobis.
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
              <h1 className="text-center">Loading...</h1>
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
                  <p>{toLocalDate(nextMatch?.startDate)}</p>
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
