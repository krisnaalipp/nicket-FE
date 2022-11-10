import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { MdAirlineSeatReclineNormal, MdEventSeat } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import "../vipSeat.css";
import { getBookedSeat } from "../config/queries";
import { useMutation, useQuery } from "@apollo/client";
import { PURCHASE_TICKET } from "../config/mutations";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ModalPayment from "./PaymentModal";
import FadeLoader from "react-spinners/FadeLoader";

function VipSeat() {
  const { matchId } = useParams();
  // console.log(matchId, "match id tapi dari VIP seat");
  const location = useLocation();
  const { category } = location.state;
  const [transactionId, setTransactionId] = useState();
  const [selectSeat, setSeats] = useState([]);
  const [ticketInput, setTicketInput] = useState({
    ktp: "",
    email: "",
    categorySeat: category,
    ticketPrice: 200000,
    MatchId: +matchId,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...ticketInput,
    };
    newInput[name] = value;
    setTicketInput(newInput);
  };
  const {
    loading: bookedSeatLoading,
    error: errorBookedSeat,
    data: dataBookedSeat,
  } = useQuery(getBookedSeat, {
    variables: {
      getTransactionByMatchId: matchId,
    },
    fetchPolicy: "no-cache",
  });
  let filterVIP;
  if (!bookedSeatLoading) {
    filterVIP = dataBookedSeat?.getTransactionByMatch?.filter((el) => {
      return el.categorySeat === category;
    });
  }

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
      },
    }
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const vipSeats = [
    [
      "1-A",
      "1-B",
      "1-C",
      "1-D",
      "1-E",
      "1-F",
      "1-G",
      "1-H",
      "1-I",
      "1-J",
      "1-K",
      "1-L",
      "1-M",
      "1-N",
      "1-O",
      "1-P",
      "1-Q",
      "1-R",
      "1-S",
      "1-T",
    ],
    [
      "2-A",
      "2-B",
      "2-C",
      "2-D",
      "2-E",
      "2-F",
      "2-G",
      "2-H",
      "2-I",
      "2-J",
      "2-K",
      "2-L",
      "2-M",
      "2-N",
      "2-O",
      "2-P",
      "2-Q",
      "2-R",
      "2-S",
      "2-T",
    ],
    [
      "3-A",
      "3-B",
      "3-C",
      "3-D",
      "3-E",
      "3-F",
      "3-G",
      "3-H",
      "3-I",
      "3-J",
      "3-K",
      "3-L",
      "3-M",
      "3-N",
      "3-O",
      "3-P",
      "3-Q",
      "3-R",
      "3-S",
      "3-T",
    ],
    [
      "4-A",
      "4-B",
      "4-C",
      "4-D",
      "4-E",
      "4-F",
      "4-G",
      "4-H",
      "4-I",
      "4-J",
      "4-K",
      "4-L",
      "4-M",
      "4-N",
      "4-O",
      "4-P",
      "4-Q",
      "4-R",
      "4-S",
      "4-T",
    ],
    [
      "5-A",
      "5-B",
      "5-C",
      "5-D",
      "5-E",
      "5-F",
      "5-G",
      "5-H",
      "5-I",
      "5-J",
      "5-K",
      "5-L",
      "5-M",
      "5-N",
      "5-O",
      "5-P",
      "5-Q",
      "5-R",
      "5-S",
      "5-T",
    ],
    [
      "6-A",
      "6-B",
      "6-C",
      "6-D",
      "6-E",
      "6-F",
      "6-G",
      "6-H",
      "6-I",
      "6-J",
      "6-K",
      "6-L",
      "6-M",
      "6-N",
      "6-O",
      "6-P",
      "6-Q",
      "6-R",
      "6-S",
      "6-T",
    ],
    [
      "7-A",
      "7-B",
      "7-C",
      "7-D",
      "7-E",
      "7-F",
      "7-G",
      "7-H",
      "7-I",
      "7-J",
      "7-K",
      "7-L",
      "7-M",
      "7-N",
      "7-O",
      "7-P",
      "7-Q",
      "7-R",
      "7-S",
      "7-T",
    ],
    [
      "8-A",
      "8-B",
      "8-C",
      "8-D",
      "8-E",
      "8-F",
      "8-G",
      "8-H",
      "8-I",
      "8-J",
      "8-K",
      "8-L",
      "8-M",
      "8-N",
      "8-O",
      "8-P",
      "8-Q",
      "8-R",
      "8-S",
      "8-T",
    ],
    [
      "9-A",
      "9-B",
      "9-C",
      "9-D",
      "9-E",
      "9-F",
      "9-G",
      "9-H",
      "9-I",
      "9-J",
      "9-K",
      "9-L",
      "9-M",
      "9-N",
      "9-O",
      "9-P",
      "9-Q",
      "9-R",
      "9-S",
      "9-T",
    ],
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
      "10-K",
      "10-L",
      "10-M",
      "10-N",
      "10-O",
      "10-P",
      "10-Q",
      "10-R",
      "10-S",
      "10-T",
    ],
  ];
  return (
    <>
      <div className="col-12 mx-auto">
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
              Select your VIP Seat
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
              <div className="row">
                <div
                  className="col-1 mx-auto"
                  style={{
                    textAlign: "center",
                    maxWidth: "6%",
                  }}
                >
                  <FadeLoader color="#36d7b7" />
                </div>
              </div>
            ) : (
              <ol>
                {vipSeats.map((el, i) => {
                  return (
                    <li className={`row row--${i}`}>
                      <ol className="vip-seats">
                        {el.map((vip) => {
                          return (
                            <li className="vip-seat">
                              <input
                                disabled={filterVIP.find((transaction) => {
                                  return transaction.Seats?.find((seat) => {
                                    return seat.seatNumber === vip;
                                  });
                                })}
                                type="checkbox"
                                id={vip}
                                value={vip}
                                onChange={(e) => addSeat(vip, e)}
                              />
                              <label for={vip}>{vip}</label>
                            </li>
                          );
                        })}
                      </ol>
                    </li>
                  );
                })}
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
      <div className="col-6 mx-auto" style={{ marginTop: "2rem" }}>
        {loading ? (
          <div className="row">
            <div
              className="col-1 mx-auto"
              style={{
                textAlign: "center",
                maxWidth: "6%",
              }}
            >
              <FadeLoader color="#36d7b7" />
            </div>
          </div>
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
                  placeholder="Enter your NIK"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={ticketInput.email}
                  placeholder="Enter your email"
                  required
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
                <div className="row">
                  <div className="col-4 mx-auto">
                    <h5>Total Item </h5>
                  </div>
                  <div className="col-8 mx-auto">
                    <h5>: {selectSeat.length}</h5>
                  </div>
                  <div className="col-4 mx-auto">
                    <h5>Price </h5>
                  </div>
                  <div className="col-8 mx-auto">
                    <h5>: {formatRupiah(selectSeat.length * 150000)}</h5>
                  </div>
                </div>
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
                &nbsp;&nbsp;
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

export default VipSeat;
