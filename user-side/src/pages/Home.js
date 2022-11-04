import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DescriptionCard from "../components/DescriptionCard";
import ArticleCard from "../components/ArticleCard";

function Home() {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <DescriptionCard />

      <div className="container mt-5 mb-5">
        <div className="row">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
