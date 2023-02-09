import Stories from "../../components/Stories";
import Sliders from "../../components/Sliders";
import Header from "../../components/Header";
import Partners from "../../components/clients-partners/clients-partners";
import Footer from "../../components/Footer";
import { Service } from "@app/components/Services";
const Home = () => {
  return (
    <>
      <Header />
      <Sliders />
      <Stories />
      <Service />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
