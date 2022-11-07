import ListNewsCard from "../components/ListNewsCard";
import { ImNewspaper } from "react-icons/im";
import { BsDot } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { readNews } from "../config/queries";

function ListNews() {
  const { loading, error, data } = useQuery(readNews);

  if (error) {
    return <h1>Error Data!</h1>;
  }

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1624072213576-766398edb398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" +
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
            <ImNewspaper
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
            List of News
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
          <h1 className="text-center">Loading...</h1>
        ) : (
          <div className="row">
            {data.getNews?.map((el) => (
              <ListNewsCard news={el} key={el._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ListNews;
