import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import { MdAirlineSeatReclineNormal, MdEventSeat } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import "../seat.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PURCHASE_TICKET } from "../config/mutations";
import ModalPayment from "./PaymentModal";
import { getBookedSeat } from "../config/queries";

function RegulerSeat() {
  const { matchId } = useParams();
  const location = useLocation();
  const { category } = location.state;
  const [transactionId, setTransactionId] = useState();
  const [selectSeat, setSeats] = useState([]);
  const [ticketInput, setTicketInput] = useState({
    ktp: "",
    email: "",
    categorySeat: category,
    ticketPrice: 150000,
    MatchId: +matchId,
  });

  const {
    loading: bookedSeatLoading,
    error: errorBookedSeat,
    data: dataBookedSeat,
  } = useQuery(getBookedSeat, {
    variables: {
      getTransactionByMatchId: +matchId,
    },
    fetchPolicy: "no-cache",
  });
  let filterReguler;
  if (!bookedSeatLoading) {
    filterReguler = dataBookedSeat?.getTransactionByMatch?.filter((el) => {
      return el.categorySeat === category;
    });
  }

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...ticketInput,
    };
    newInput[name] = value;
    setTicketInput(newInput);
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const addSeat = (seat, e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectSeat.length < 3) {
        setSeats([...selectSeat, { seatNumber: value }]);
      } else {
        e.preventDefault();
        e.target.checked = false;
      }
    } else {
      const temp = selectSeat.filter((el) => el.seatNumber !== seat);
      setSeats(temp);
    }
  };

  const [handleSubmit, { error, loading, data }] = useMutation(
    PURCHASE_TICKET,
    {
      onCompleted: (data) => {
        setTicketInput({
          ktp: "",
          email: "",
          ticketPrice: 150000,
          category,
          MatchId: +matchId,
        });
        setSeats([]);
        setTransactionId(data.createTransaction.id);
        handleShow();
      },
      onError: (error) => {
        setSeats([]);
        console.log(error);
      },
    }
  );

  const regularSeats = [
    ["1-A", "1-B", "1-C", "1-D", "1-E", "1-F", "1-G", "1-H", "1-I", "1-J"],
    ["2-A", "2-B", "2-C", "2-D", "2-E", "2-F", "2-G", "2-H", "2-I", "2-J"],
    ["3-A", "3-B", "3-C", "3-D", "3-E", "3-F", "3-G", "3-H", "3-I", "3-J"],
    ["4-A", "4-B", "4-C", "4-D", "4-E", "4-F", "4-G", "4-H", "4-I", "4-J"],
    ["5-A", "5-B", "5-C", "5-D", "5-E", "5-F", "5-G", "5-H", "5-I", "5-J"],
    ["6-A", "6-B", "6-C", "6-D", "6-E", "6-F", "6-G", "6-H", "6-I", "6-J"],
    ["7-A", "7-B", "7-C", "7-D", "7-E", "7-F", "7-G", "7-H", "7-I", "7-J"],
    ["8-A", "8-B", "8-C", "8-D", "8-E", "8-F", "8-G", "8-H", "8-I", "8-J"],
    ["9-A", "9-B", "9-C", "9-D", "9-E", "9-F", "9-G", "9-H", "9-I", "9-J"],
    [
      "10-A",
      "10-B",
      "10-C",
      "10-D",
      "10-E",
      "10-F",
      "10-G",
      "10-H",
      "10-I",
      "10-J",
    ],
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-7 mx-auto">
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
              <MdAirlineSeatReclineNormal
                style={{
                  width: "5%",
                  height: "5%",
                  marginRight: "1%",
                  marginBottom: "0.5%",
                }}
              />
              Select your {category} seat
            </h4>
          </div>
          <hr />
          <div>
            <Card
              body
              className="shadow-lg"
              style={{
                border: 0,
                marginBottom: "2%",
              }}
            >
              <div className="field-side">
                <div className="field">Football Field</div>
              </div>
            </Card>
            {bookedSeatLoading ? (
              <h2>Loading ....</h2>
            ) : (
              <ol>
                {
                  /* LOOPING SECTION */
                  regularSeats.map((el, i) => {
                    return (
                      <li className={`row row--${i}`}>
                        <ol className="seats">
                          {el.map((elSeat, index) => {
                            return (
                              <>
                                <li className="seat">
                                  <input
                                    disabled={filterReguler[0]?.Seats?.find(
                                      (el) => {
                                        if (el.seatNumber === elSeat) {
                                          return true;
                                        } else {
                                          return false;
                                        }
                                      }
                                    )}
                                    type="checkbox"
                                    onChange={(e) => addSeat(elSeat, e)}
                                    value={elSeat}
                                    name={elSeat}
                                    id={elSeat}
                                  />
                                  <label for={elSeat}>{elSeat}</label>
                                </li>
                              </>
                            );
                          })}
                        </ol>
                      </li>
                    );
                  })
                }
              </ol>
            )}
          </div>
          <hr />
          <div className="row" style={{ textAlign: "center" }}>
            <div
              className="col-3 mx-auto"
              style={{ backgroundColor: "#ddd", borderRadius: "0.3rem" }}
            >
              <b>Sold</b>
            </div>
            <div
              className="col-3 mx-auto"
              style={{
                backgroundColor: "rgba(33, 232, 26, 0.54)",
                borderRadius: "0.3rem",
              }}
            >
              <b>Available</b>
            </div>
            <div
              className="col-3 mx-auto"
              style={{
                backgroundColor: "rgba(13, 170, 7, 1)",
                borderRadius: "0.3rem",
              }}
            >
              <b>Selected</b>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-5 mx-auto">
        {loading ? (
          <h3>Loading ...</h3>
        ) : (
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
              <h6>
                <IoInformationCircleSharp
                  style={{
                    width: "8%",
                    height: "8%",
                    marginRight: "1%",
                    marginBottom: "0.5%",
                  }}
                />
                Complete your ticket purchase information
              </h6>
            </div>
            <hr />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                  variables: {
                    inputTransaction: { ...ticketInput, seat: selectSeat },
                  },
                });
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>KTP</Form.Label>
                <Form.Control
                  type="text"
                  value={ticketInput.ktp}
                  name="ktp"
                  onChange={handleChange}
                  placeholder="Enter your KTP"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={ticketInput.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Label>Seats</Form.Label>
              <div className="row mb-3">
                {selectSeat.map((el, i) => {
                  return (
                    <>
                      <div className="col-2">
                        <h6
                          className="text-center"
                          style={{
                            backgroundColor: "rgba(13, 170, 7, 1)",
                            padding: "0.1rem",
                            borderRadius: "0.3rem",
                            color: "white",
                            width: "3.7rem",
                          }}
                        >
                          <MdEventSeat />
                          &nbsp;
                          {el.seatNumber}
                        </h6>
                      </div>
                    </>
                  );
                })}
              </div>
              <Card className="p-3 mb-3">
                <h5>Total Item : {selectSeat.length}</h5>
                <h5>Price : {formatRupiah(selectSeat.length * 150000)}</h5>
              </Card>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Button
                  variant="secondary"
                  onClick={() => navigate("/ticket/" + matchId)}
                >
                  Back
                </Button>
                &nbsp;
                <Button variant="dark" type="submit">
                  Next
                </Button>
                <ModalPayment
                  show={show}
                  onHide={handleClose}
                  transactionId={transactionId}
                />
              </div>
            </Form>
          </Card>
        )}
      </div>
    </>
  );
}

export default RegulerSeat;
