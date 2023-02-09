import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clients-partner.scss";
import { getPartners } from "../../config/apiService";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    arrayApiMenu();
  }, []);
  const arrayApiMenu = async () => {
    let res = await getPartners();
    if (res && res.data && res.data.length > 0) {
      setPartners(res.data);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="sliders">
        <h2 className="title">Trusted by the Clients & Partners</h2>
        <Slider {...settings}>
          {partners.map((item, index) => (
            <div key={index} className="cart">
              <a href={item.linkPartners}>
                <img
                  className="logoPartners"
                  src={item.logoPartners}
                  alt={item.namePartners}
                ></img>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Partners;
