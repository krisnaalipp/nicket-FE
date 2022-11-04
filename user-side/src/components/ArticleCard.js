import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import "../custom.css";

function ArticleCard() {
  return (
    <div className="col-4 mx-auto">
      <Card className="bg-dark text-white shadow-lg card-zoom">
        <Card.Img
          src="https://images.unsplash.com/photo-1624072213576-766398edb398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <div
            style={{
              position: "absolute",
              bottom: 8,
            }}
          >
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text.</Card.Text>
            <div>
              <Card.Text>
                <Icon.ClockFill />
                &nbsp; Last updated 3 mins ago
              </Card.Text>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ArticleCard;
