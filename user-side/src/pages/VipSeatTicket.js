import { MdEventSeat } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import VipSeat from "../components/VipSeat";

function VipSeatTicket() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1509719482242-cb6d79f11801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80" +
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
            <MdEventSeat
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
            Seats
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
          <VipSeat />
        </div>
      </div>
    </>
  );
}

export default VipSeatTicket;
