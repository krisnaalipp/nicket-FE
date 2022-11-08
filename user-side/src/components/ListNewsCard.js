import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function toLocalDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    hour12: false,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ListNewsCard({ news }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-8 mx-auto">
        <div
          className="card shadow-lg card-litle-zoom"
          style={{
            marginBottom: "2%",
            border: 0,
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  height: "100%",
                }}
                className="img-fluid"
                src={news.imgUrl}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">
                  {news.description.substring(0, 40)} ...
                </p>
                <div className="row">
                  <div className="col-8" style={{ marginTop: "1.5rem" }}>
                    <p className="card-text" style={{ marginTop: "0.3rem" }}>
                      <small className="text-muted">
                        {toLocalDate(news.createdAt)}
                      </small>
                    </p>
                  </div>
                  <div
                    className="col-4"
                    style={{
                      textAlign: "right",
                      marginTop: "1.5rem",
                    }}
                  >
                    <button
                      onClick={() => navigate(`/detail-news/${news._id}`)}
                      className="btn btn-secondary stretched-link"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListNewsCard;
