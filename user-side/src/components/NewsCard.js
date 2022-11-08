import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import "../custom.css";
import { useNavigate } from "react-router-dom";

function toLocalDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    hour12: false,
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NewsCard({ latestNews }) {
  const navigate = useNavigate();

  return (
    <div className="col-4 mx-auto">
      <Card className="bg-dark text-white shadow-lg card-zoom">
        <Card.Img
          src={latestNews.imgUrl}
          style={{
            height: "13rem",
          }}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <div
            className="row"
            style={{
              position: "absolute",
              bottom: 8,
            }}
          >
            <Card.Title>{latestNews.title}</Card.Title>
            <div className="col-8">
              <Card.Text>
                <Icon.ClockFill />
                &nbsp;{toLocalDate(latestNews.createdAt)}
              </Card.Text>
            </div>
            <div
              className="col-4"
              style={{
                textAlign: "center",
              }}
            >
              <button
                onClick={() => navigate(`/detail-news/${latestNews._id}`)}
                className="btn btn-secondary stretched-link"
              >
                Read
              </button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default NewsCard;
