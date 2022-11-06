import { Card, Button } from "react-bootstrap";
import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import "../assets/overlay.css";

export default function NewsCard({ news }) {
  return (
    <>
      <div className="col-4 mb-4 img">
        <Button>Delete</Button>
        <Card className="text-white shadow bg-dark">
          <Card.Img
            src={news.imgUrl}
            alt="Card image"
            className="image"
            style={{ width: "100%", height: "260px" }}
          />
          <div className="middle">
            <div className="d-flex justify-content-around gap-5">
              <BsFillPencilFill color="blue" size={30} />
              <BsTrashFill color="red" size={30} />
            </div>
          </div>
          <Card.ImgOverlay>
            <Card.Title>{news.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
