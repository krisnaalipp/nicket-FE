import HeaderImage from "../components/HeaderImage";
import DescriptionCard from "../components/DescriptionCard";
import NewsCard from "../components/NewsCard";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";
import HomeModal from "../components/HomeModal";

function Home() {
  const [show, setModalShow] = useState(true);

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
          <div className="row">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;
