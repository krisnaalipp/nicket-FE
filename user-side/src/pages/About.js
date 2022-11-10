import { GiLaurelsTrophy } from "react-icons/gi";
import { BsDot, BsQuestionCircleFill } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";
import {
  MdOutlineEventSeat,
  MdOutlineSortByAlpha,
  MdOutlineAttachEmail,
  MdMarkEmailRead,
} from "react-icons/md";
import { SiSamsungpay } from "react-icons/si";
import Card from "react-bootstrap/Card";
import { ImLocation, ImPhone } from "react-icons/im";
import "../custom.css";

function About() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1616514169928-a1e40c6f791c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
        }}
      >
        <div
          style={{
            height: "50vh",
            alignItems: "end",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              border: 0,
              marginBottom: "1%",
              borderRadius: "0.3rem",
              padding: "0.5%",
              backgroundColor: "rgba(167, 171, 175, 0.48)",
            }}
          >
            <GiLaurelsTrophy
              style={{
                marginBottom: "2%",
              }}
            />
            <BsDot
              style={{
                marginLeft: "-0.5rem",
                marginRight: "-0.5rem",
              }}
            />
            Eagle Football Club
          </h1>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: "3%",
          marginBottom: "2%",
        }}
      >
        <div className="row">
          <div className="col-8 mx-auto">
            <div
              className="card shadow-lg"
              style={{
                marginBottom: "2%",
                border: 0,
              }}
            >
              <div className="row g-0">
                <div
                  className="col-md-4"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      height: "100%",
                    }}
                    className="img-magic"
                    src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
                  />
                </div>
                <div
                  className="col-md-8"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div className="card-body">
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Eagle F.C is a website that provide information about
                      football news, fixtures, you can also view the results of
                      Eagle F.C You can easily and safely buy tickets for Eagle
                      F.C matches online anywhere anytime. Purchasing tickets
                      online with a one-person one-seat system is expected to
                      avoid overload capacity in the stadium. from football by
                      football and for football because football can bring it
                      all together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 mx-auto">
            <div
              className="card shadow-lg"
              style={{
                marginBottom: "2%",
                border: 0,
              }}
            >
              <div className="card-body">
                <h4 className="text-center">Contact Information</h4>
                <hr />
                <p className="card-text">
                  <ol
                    style={{
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <ImLocation
                        style={{
                          marginRight: "0.4rem",
                          marginBottom: "0.2rem",
                        }}
                      />
                      Jl. Sultan Iskandar Muda, Jakarta Selatan
                    </li>
                    <li>
                      <ImPhone
                        style={{
                          marginRight: "0.4rem",
                          marginBottom: "0.2rem",
                        }}
                      />
                      (021) 8067 5787
                    </li>
                    <li>
                      <MdMarkEmailRead
                        style={{
                          marginRight: "0.4rem",
                          marginBottom: "0.2rem",
                        }}
                      />
                      admnicket8@gmail.com
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "1.5rem" }}>
          <div className="col-10 mx-auto">
            <div
              className="card shadow-lg"
              style={{
                marginBottom: "2%",
                border: 0,
              }}
            >
              <div className="card-body">
                <h3 className="text-center">
                  <BsQuestionCircleFill
                    style={{
                      marginRight: "0.4rem",
                      marginBottom: "0.2rem",
                    }}
                  />
                  How to buy E-Ticket
                </h3>
                <hr />

                <div
                  className="row"
                  style={{
                    height: "5rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card-litle-zoom shadow-sm col-5 mx-auto"
                    style={{
                      textAlign: "center",
                      border: 0,
                      padding: "1%",
                      backgroundColor: "rgba(187, 183, 186, 0.55)",
                      borderRadius: "0.6rem",
                    }}
                  >
                    <b>Choose football match</b>
                  </div>
                  <div
                    className="card shadow-lg col-1 mx-auto"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      border: 0,
                      borderRadius: "50%",
                      height: "90%",
                    }}
                  >
                    <IoIosFootball
                      style={{
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                  </div>
                  <div className="col-5 mx-auto"></div>
                </div>

                <div
                  className="row"
                  style={{
                    height: "5rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-5 mx-auto"></div>
                  <div
                    className="card shadow-lg col-1 mx-auto"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      border: 0,
                      borderRadius: "50%",
                      height: "90%",
                    }}
                  >
                    <MdOutlineEventSeat
                      style={{
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                  </div>
                  <div
                    className="card-litle-zoom shadow-sm col-5 mx-auto"
                    style={{
                      textAlign: "center",
                      border: 0,
                      padding: "1%",
                      backgroundColor: "rgba(187, 183, 186, 0.55)",
                      borderRadius: "0.6rem",
                    }}
                  >
                    <b>Select seat category</b>
                  </div>
                </div>

                <div
                  className="row"
                  style={{
                    height: "5rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card-litle-zoom shadow-sm col-5 mx-auto"
                    style={{
                      textAlign: "center",
                      border: 0,
                      padding: "1%",
                      backgroundColor: "rgba(187, 183, 186, 0.55)",
                      borderRadius: "0.6rem",
                    }}
                  >
                    <b>Choose seat number</b>
                  </div>
                  <div
                    className="card shadow-lg col-1 mx-auto"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      border: 0,
                      borderRadius: "50%",
                      height: "90%",
                    }}
                  >
                    <MdOutlineSortByAlpha
                      style={{
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                  </div>
                  <div className="col-5 mx-auto"></div>
                </div>

                <div
                  className="row"
                  style={{
                    height: "5rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-5 mx-auto"></div>
                  <div
                    className="card shadow-lg col-1 mx-auto"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      border: 0,
                      borderRadius: "50%",
                      height: "90%",
                    }}
                  >
                    <SiSamsungpay
                      style={{
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                  </div>
                  <div
                    className="card-litle-zoom shadow-sm col-5 mx-auto"
                    style={{
                      textAlign: "center",
                      border: 0,
                      padding: "1%",
                      backgroundColor: "rgba(187, 183, 186, 0.55)",
                      borderRadius: "0.6rem",
                    }}
                  >
                    <b>Pay using the payment method provided</b>
                  </div>
                </div>

                <div
                  className="row"
                  style={{
                    height: "5rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card-litle-zoom shadow-sm col-5 mx-auto"
                    style={{
                      textAlign: "center",
                      border: 0,
                      padding: "1%",
                      backgroundColor: "rgba(187, 183, 186, 0.55)",
                      borderRadius: "0.6rem",
                    }}
                  >
                    <b>Done, Your ticket will be sent to your email</b>
                  </div>
                  <div
                    className="card shadow-lg col-1 mx-auto"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      border: 0,
                      borderRadius: "50%",
                      height: "90%",
                    }}
                  >
                    <MdOutlineAttachEmail
                      style={{
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                  </div>
                  <div className="col-5 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
