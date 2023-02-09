import { getInfoTeam } from "@app/config/apiService";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./info.scss";

const InfoUs = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    arrayApiMenu();
  }, []);
  const arrayApiMenu = async () => {
    let res = await getInfoTeam();
    if (res && res.data && res.data.length > 0) {
      setInfo(res.data);
    }
  };
  return (
    <div className="body_info">
      <Container>
        <div className="infoUs">
          <p>
            Established on the early of 2016 and known as STD Software serves
            diverse global clients (Japanese, Australian, US) by offering
            mainstream services: IT outsourcing, software & website development,
            mobile applications.
          </p>
          <p>
            In 2019, STD Software was acquired to become ST Software division in
            ST United beside other divisions: ST Digital and ST Incubator.
          </p>
          <p>
            <strong>Our vision</strong>: Be the premier enterprise solutions
            provider and software product innovator in the Asia Pacific region
          </p>
          <p>
            <strong>Our mission</strong>:
          </p>
          <ul>
            <li>
              To empower our business partners to gain competitive advantage by
              providing innovative solutions.
            </li>
            <li>
              To continuously enhance our expertise in cutting-edge technologies
              and processes.
            </li>
          </ul>
        </div>
        <div className="caption">
          <h1>WE ARE ST UNITED</h1>
        </div>
        <Row>
            {info.map((item, index) => (
              <div key={index} className="infoDigital">
                <p>
                  <b>{item.title}</b>
                </p>
                <p>{item.description}</p>
              </div>
            ))}
        </Row>

        <div className="cool_stories">
          <h4>…and many other cool stories..</h4>
        </div>
      </Container>
    </div>
  );
};

export default InfoUs;
