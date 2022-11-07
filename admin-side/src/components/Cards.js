import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import "../assets/overlay.css";
import OffcanvasFormNewsEdit from "./OffCanvasEditNewsForm";

export default function NewsCard({ news }) {
  const [show, setShow] = useState();

  function editNews(id) {
    console.log(id, "===== edit news");
  }

  function deleteNews(e, id) {
    e.preventDefault();
    console.log(id, "=== news delete");
  }
  return (
    <>
      <div className="col-4 mb-4 img">
        <Card className="text-white shadow bg-dark">
          <Card.ImgOverlay>
            <Card.Title>{news.title}</Card.Title>
          </Card.ImgOverlay>
          <Card.Img
            src={news.imgUrl}
            alt="Card image"
            className="image"
            style={{ width: "100%", height: "260px" }}
          />
          <div className="middle">
            <div className="d-flex justify-content-around gap-5">
              <Button variant="link" onClick={() => setShow(true)}>
                <BsFillPencilFill color="blue" size={30} />
              </Button>
              <OffcanvasFormNewsEdit
                show={show}
                placement={"end"}
                onHide={() => setShow(false)}
              />
              <Button onClick={(e) => deleteNews(e, news._id)}>
                <BsTrashFill color="red" size={30} />
              </Button>
            </div>
          </div>
          {/* <Button className="btn-danger" onClick={(e) => deleteNews(news.id)}>
            Delete
          </Button> */}
        </Card>
      </div>
    </>
  );
}
