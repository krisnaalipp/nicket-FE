import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import "../custom.css";

function NewsCard() {
  return (
    <div className="col-4 mx-auto">
      <Card className="bg-dark text-white shadow-lg card-zoom">
        <Card.Img
          src="https://images.unsplash.com/photo-1624072213576-766398edb398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text.</Card.Text>
            <div className="col-8">
              <Card.Text>
                <Icon.ClockFill />
                &nbsp; 11 November 2022
              </Card.Text>
            </div>
            <div
              className="col-4"
              style={{
                textAlign: "center",
              }}
            >
              <button className="btn btn-secondary">Read</button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default NewsCard;
