import { Button, Card, Container } from "react-bootstrap";
import { RiMenuAddLine } from "react-icons/ri";
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
    <Container className="m-4">
      <Card
        style={{
          borderRadius: 10,
          padding: 1,
          width: "100%",
        }}
      >
        <div className="d-flex justify-content-center px-5 mt-3">
          <h2> News</h2>
        </div>
        <div className="d-flex justify-content-center px-5">
          <AddNews
            show={show}
            setShow={setShow}
            placement={"end"}
            onHide={() => setShow(false)}
          />
          <Button className=" m-3 p-3 shadow" onClick={() => setShow(true)}>
            <b>ADD NEW NEWS</b>
          </Button>
        </div>
        <div className="m-4">
          <Container>
            {loading ? (
              <FadeLoader />
            ) : (
              <div className="row">
                {data?.getNews?.map((el, i) => {
                  return <NewsCard news={el} key={i} />;
                })}
              </div>
            )}
          </Container>
        </div>
      </Card>
    </Container>
  );
}
