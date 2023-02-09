import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Incubation from "../../components/Info-incubation";
import Project from "../../components/Stories/Project";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Incubation />
      <Project/>
      <Footer />
    </>
  );
};

export default Home;
