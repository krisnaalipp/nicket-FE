import { GiLaurelsTrophy } from "react-icons/gi";
import { BsDot, BsQuestionCircleFill } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";
import {
  MdOutlineEventSeat,
  MdOutlineSortByAlpha,
  MdOutlineAttachEmail,
} from "react-icons/md";
import { SiSamsungpay } from "react-icons/si";
import Card from "react-bootstrap/Card";
import "../custom.css";

function About() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://assets.skor.id/crop/0x0:0x0/x/photo/2022/06/02/2358535867.jpeg" +
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
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae beatae saepe exercitationem impedit at aspernatur
                      fuga in nisi deserunt perspiciatis facilis assumenda
                      repellat dolores ducimus numquam, atque accusantium
                      laudantium harum?
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
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  beatae saepe exercitationem impedit at aspernatur fuga in nisi
                  deserunt perspiciatis facilis assumenda repellat dolores
                  ducimus numquam, atque accusantium laudantium harum?
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
