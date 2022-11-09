import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getMatchId } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

function Ticket() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  console.log(matchId, "ini match id nya");
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
          backgroundImage: "url('https://i.ibb.co/f1rDWMg/final.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      ></div>
      {loading ? (
        <div className="row">
          <div
            className="col-1 mx-auto"
            style={{
              textAlign: "center",
              maxWidth: "6%",
              marginBottom: "100%",
            }}
          >
            <FadeLoader color="#36d7b7" />
          </div>
        </div>
      ) : (
        <div
          className="container"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <div className="row">
            <div className="col-6 mx-auto">
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
                    <Form.Label>Select Ticket Category</Form.Label>
                    <Form.Select style={{ textAlign: "center" }}>
                      <option selected disabled value="">
                        SELECT ONE
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
                        variant="dark"
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
                        variant="dark"
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
            <div className="col-6 mx-auto">
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
                    Terms and Conditions
                  </h4>
                </div>
                <hr />

                <ol
                  style={{
                    listStyle: "decimal",
                    padding: "1.5rem",
                  }}
                >
                  <li>
                    Regular ticket price is Rp. 150.000 per seat and the VIP
                    ticket price is Rp. 200000 per seat.
                  </li>
                  <li>
                    One person can buy a maximum of three tickets and E-Ticket
                    are only available for certain matches.
                  </li>
                  <li>One e-ticket is valid for one match.</li>
                  <li>
                    This e-ticket is valid as an entry e-ticket and cannot be
                    represented.
                  </li>
                  <li>Must bring and show original identity card (KTP).</li>
                  <li>
                    Tickets that have been purchased cannot be exchanged or
                    refunded
                  </li>
                  <li>
                    It is forbidden to bring drugs, sharp weapons, firecrackers,
                    fireworks and flares and any items that threaten the
                    continuity of the match.
                  </li>
                  <li>
                    Counterfeiting e-tickets is illegal and will be dealt with
                    legally.
                  </li>
                  <li>
                    Please be careful of any fraud in the name of Eagle F.C
                  </li>
                  <li>
                    Eagle F.C reserves the right to change the terms and
                    conditions without prior notice.
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Ticket;
