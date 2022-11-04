import Card from "react-bootstrap/Card";
import { GiSoccerBall } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";

function DescriptionCard() {
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

              <ImNewspaper
                style={{
                  width: "9%",
                  height: "9%",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              />

              <GiSoccerBall
                style={{
                  width: "8%",
                  height: "8%",
                }}
              />
            </div>
            <p
              style={{
                textAlign: "justify",
              }}
            >
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
            <h4>Next Game</h4>
            <hr />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
