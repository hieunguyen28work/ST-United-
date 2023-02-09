import "./style/App.scss";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import JoinUs from "./pages/JoinUs";
import Talk from "./pages/Talk";
import StSoftware from "./pages/StSoftwate";
import { Routes, Route } from "react-router-dom";
import Digital from "./pages/Digital";
import WhoWeAre from "./pages/WhoWeAre";
import StIncubation from "./pages/StIncubation";
import Title from "./components/Pages/title";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Title title="ST United - United to grow up">
              <Home />
            </Title>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Title title="Portfolio - ST United">
              <Portfolio />
            </Title>
          }
        />
        <Route
          path="/join-us"
          element={
            <Title title="Join Us - ST United">
              <JoinUs />
            </Title>
          }
        />
        <Route
          path="/lets-talk"
          element={
            <Title title="Let's talk - ST United">
              <Talk />
            </Title>
          }
        />
        <Route
          path="/st-software"
          element={
            <Title title="ST Software - ST United">
              <StSoftware />
            </Title>
          }
        />
        <Route
          path="/st-digital"
          element={
            <Title title="ST Digital - ST United">
              <Digital />
            </Title>
          }
        />
        <Route
          path="/who-we-are"
          element={
            <Title title="Who We Are - ST United">
              <WhoWeAre />
            </Title>
          }
        />
        <Route
          path="/st-incubation"
          element={
            <Title title="ST Incubation - ST United">
              <StIncubation />
            </Title>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
