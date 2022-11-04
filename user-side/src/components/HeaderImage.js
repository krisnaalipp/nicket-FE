import "../custom.css";

function HeaderImage() {
  return (
    <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <div
        className="content text-center shadow-lg"
        style={
          {
            // backgroundColor: "rgba(59, 255, 87, 0.31)",
            // border: "0.2rem solid rgba(153, 255, 153, 1)",
            // backgroundColor: "rgba(200, 221, 216, 0.36)",
            // border: "0.2rem solid black",
            // borderRadius: "0.5rem",
            // width: "10rem",
          }
        }
      >
        <h1 className="text-white">NICKET</h1>
      </div>
    </div>
  );
}

export default HeaderImage;
