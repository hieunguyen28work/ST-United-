import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import { useEffect, useState } from "react";
import { slidersApi } from "../../config/apiService";

const Sliders = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await slidersApi().catch((err) => {
      console.log("ERROR", err);
    });
    setSliders(response.data);
  };
  return (
    <Carousel fade>
      {sliders.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div className="over-lay"></div>
          <img
            className="img-slide d-block w-100"
            src={slide.src}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="btn-visit">
              <a href="/">{slide.title}</a>
            </div>
          </Carousel.Caption>
          <div className="slide-line">aaa</div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Sliders;
