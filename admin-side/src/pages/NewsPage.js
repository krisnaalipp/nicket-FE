import { Button, Container } from "react-bootstrap";
import { RiMenuAddLine } from "react-icons/ri";
import OffcanvasFormNewsEdit from "../components/OffCanvasEditNewsForm";
import NewsCard from "../components/Cards";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";
import AddNews from "../components/AddNews";

export default function NewsPage() {
  const { data, loading } = useQuery(GET_NEWS);
  const [show, setShow] = useState();
  return (
    <div className="m-5">
      <div className="mb-5 d-flex justify-content-between px-5">
        <h2> News</h2>
        <AddNews
          show={show}
          setShow={setShow}
          placement={"end"}
          onHide={() => setShow(false)}
        />
        <Button
          style={{ backgroundColor: "darkblue" }}
          className="shadow-lg"
          onClick={() => setShow(true)}
        >
          <RiMenuAddLine size={40} />
        </Button>
      </div>
      <div className="">
        <Container>
          {loading ? (
            <FadeLoader />
          ) : (
            <div className="row">
              {data.getNews?.map((el, i) => {
                return <NewsCard news={el} key={i} />;
              })}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
