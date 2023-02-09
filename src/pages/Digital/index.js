import Header from "../../components/Header";
import Footer from "@app/components/Footer";
import Banner from "../../components/Banner";
import { MeetOurTeamUS } from "@app/components/MeetOurteam";
import ContentTop from "@app/components/Info-digital";
const Digital = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContentTop/>
      <MeetOurTeamUS />
      <Footer />
    </>
  );
};

export default Digital;
