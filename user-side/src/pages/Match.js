import { GiLaurelsTrophy } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import MatchCard from "../components/MatchCard";
import { getMatches } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

function Match() {
  const { loading, error, data } = useQuery(getMatches);

  if (error) {
    return <h1>Error Data!</h1>;
  }

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" +
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
            List of Match
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
          <div className="row">
            {data.getMatch.map((el) => {
              return <MatchCard match={el} key={el.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Match;
