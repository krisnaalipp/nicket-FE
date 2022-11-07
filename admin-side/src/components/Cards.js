import { useMutation } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import FadeLoader from "react-spinners/FadeLoader";
import "../assets/overlay.css";
import { DELETE_NEWS } from "../config/mutations";
import { GET_NEWS } from "../config/queries";

export default function NewsCard({ news }) {
  const [deleteNews, { data, loading, error }] = useMutation(DELETE_NEWS, {
    refetchQueries: [
      { query: GET_NEWS }, // DocumentNode object parsed with gql
    ],
    onCompleted: (data) => {
      console.log("berhasil delete news", data);
    },
  });

  // if (loading) return <FadeLoader />;
  if (error) return <h1>Submission error! ${error.message}</h1>;

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
            <div className="d-flex justify-content-center gap-5">
              <Button
                variant="link"
                onClick={() =>
                  deleteNews({
                    variables: {
                      deleteNewsId: news._id,
                    },
                  })
                }
              >
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
