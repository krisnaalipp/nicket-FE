import HeaderImage from "../components/HeaderImage";
import DescriptionCard from "../components/DescriptionCard";
import NewsCard from "../components/NewsCard";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";
import HomeModal from "../components/HomeModal";
import { useQuery } from "@apollo/client";
import { readLatestNews } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

function Home() {
  const [show, setModalShow] = useState(true);

  const { loading, error, data } = useQuery(readLatestNews);
  // console.log(data);

  if (error) {
    return <h1>Error Data!</h1>;
  }

  return (
    <>
      <HeaderImage />
      <DescriptionCard />
      <HomeModal show={show} onHide={() => setModalShow(false)} />

      <div className="container mt-5 mb-5">
        <Card
          body
          className="shadow-lg"
          style={{
            border: 0,
          }}
        >
          <h5>
            <MdOutlineUpdate
              style={{
                width: "2.5%",
                height: "2.5%",
                marginRight: "0.5%",
                marginBottom: "0.5%",
              }}
            />
            LATEST NEWS
          </h5>
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
            <div className="row">
              {data.getNewsLimit?.map((el) => (
                <NewsCard latestNews={el} key={el._id} />
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

export default Home;
