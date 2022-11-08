import Card from "react-bootstrap/Card";
import { HiOutlineHashtag } from "react-icons/hi2";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { readNewsById } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";

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

function DetailNews() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(readNewsById, {
    variables: {
      newsByIdId: id,
    },
  });

  if (error) {
    return <h1>Error Data!</h1>;
  }

  const imgUrl = data?.newsById?.imgUrl;
  // console.log(imgUrl);

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "100vh",
            alignItems: "end",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              position: "absolute",
              marginBottom: "5%",
              border: 0,
              borderRadius: "0.3rem",
              padding: "0.5%",
              backgroundColor: "rgba(167, 171, 175, 0.48)",
              paddingBottom: "1%",
            }}
          >
            {data?.newsById?.title}
          </h1>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div className="row">
            <div
              className="col-1 mx-auto"
              style={{
                textAlign: "center",
                maxWidth: "6%",
                marginBottom: "100%",
              }}
            >
              <FadeLoader color="#36d7b7" />
            </div>
          </div>
        ) : (
          <div className="row">
            <div
              className="col-10 mx-auto"
              style={{
                padding: "2rem",
              }}
            >
              <Card
                body
                className="shadow-lg"
                style={{
                  border: 0,
                  textAlign: "justify",
                }}
              >
                <div className="row">
                  <div className="col-6 mx-auto">
                    <button className="btn btn-primary">
                      <HiOutlineHashtag
                        style={{
                          marginBottom: "3%",
                        }}
                      />
                      {data?.newsById?.tags}
                    </button>
                  </div>
                  <div
                    className="col-6 mx-auto"
                    style={{
                      textAlign: "right",
                      paddingTop: "1%",
                    }}
                  >
                    {toLocalDate(data?.newsById?.createdAt)}
                  </div>
                </div>
                <hr />
                {data?.newsById?.description}
                <hr />
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <FaTwitter
                    style={{
                      width: "3%",
                      height: "3%",
                    }}
                  />
                  &nbsp;
                  <FaInstagram
                    style={{
                      width: "3%",
                      height: "3%",
                    }}
                  />
                  &nbsp;
                  <FaFacebookSquare
                    style={{
                      width: "3%",
                      height: "3%",
                    }}
                  />
                  &nbsp;
                  <FaWhatsapp
                    style={{
                      width: "3%",
                      height: "3%",
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailNews;
