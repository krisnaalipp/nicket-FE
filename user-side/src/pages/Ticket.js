import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getMatchId } from "../config/queries";

function Ticket() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const { loading, error, data } = useQuery(getMatchId, {
    variables: {
      getMatchByIdId: matchId,
    },
  });
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://studentlife.utk.edu/bigorangetix/wp-content/uploads/sites/2/2022/08/22-Neyland-Gameday-Map-with-Seating-2048x1583.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      ></div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          className="container"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
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
                  <h4>
                    <HiOutlineTicket
                      style={{
                        width: "5%",
                        height: "5%",
                        marginRight: "1%",
                        marginBottom: "0.5%",
                      }}
                    />
                    Ticket for Eagle F.C V {data.getMatchById?.opponent}
                  </h4>
                </div>
                <hr />
                <div style={{ textAlign: "center" }}>
                  <Form
                    onChange={handleChange}
                    value={category}
                    name="category"
                  >
                    <Form.Label>Select ticket category</Form.Label>
                    <Form.Select style={{ textAlign: "center" }}>
                      <option selected disabled value="">
                        SELECT CATEGORY
                      </option>
                      <option value="VIP">VIP</option>
                      <option value="Reguler 1">Reguler 1</option>
                      <option value="Reguler 2">Reguler 2</option>
                      <option value="Reguler 3">Reguler 3</option>
                    </Form.Select>
                    <br />
                    <Button
                      onClick={() => navigate("/match")}
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    &nbsp;&nbsp;
                    {category === "VIP" ? (
                      <Button
                        variant="primary"
                        onClick={() =>
                          navigate("/seat-vip/" + matchId, {
                            state: { category },
                          })
                        }
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() =>
                          navigate("/seat/" + matchId, { state: { category } })
                        }
                      >
                        Next
                      </Button>
                    )}
                  </Form>
                </div>
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
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h4>
                    <IoInformationCircleSharp
                      style={{
                        width: "9%",
                        height: "9%",
                        marginRight: "1%",
                        marginBottom: "0.5%",
                      }}
                    />
                    Information
                  </h4>
                </div>
                <hr />
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eveniet facilis aliquid voluptas esse fugiat blanditiis, ab
                  nisi, amet tempora exercitationem repellat non. Modi eaque at,
                  cumque voluptas voluptatum ea nobis. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Eveniet facilis aliquid
                  voluptas esse fugiat blanditiis, ab nisi, amet tempora
                  exercitationem repellat non. Modi eaque at, cumque voluptas
                  voluptatum ea nobis. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Eveniet facilis aliquid voluptas esse fugiat
                  blanditiis, ab nisi, amet tempora exercitationem repellat non.
                  Modi eaque at, cumque voluptas voluptatum ea nobis.
                </p>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Ticket;
