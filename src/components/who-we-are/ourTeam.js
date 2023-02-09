import { useEffect, useState } from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
import { getUsers } from "../../config/apiService";
import "./ourTeam.scss";

const OurTeam = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    arrayApiMenu();
  }, []);
  const arrayApiMenu = async () => {
    let res = await getUsers();
    if (res && res.data && res.data.length > 0) {
      setUsers(res.data);
    }
  };

  return (
    <div className="body_wwa">
      <Container>
        <div className="caption">
          <h1>Meet Our Team</h1>
        </div>
        <Row>
          {users.map((item, index) => (
            <div key={index} className="cart-info">
              <Stack gap={3}>
                <div className="user_avatar">
                  <img className="" src={item.avatar} alt=""></img>
                </div>
                <div className="user_name">
                  <span className="">{item.name}</span>
                </div>
                <div className="user_position">
                  <span className="">{item.position}</span>
                </div>
              </Stack>
            </div>
          ))}
        </Row>
        <Button variant="warning">Wanna join us?</Button>
      </Container>
    </div>
  );
};

export default OurTeam;
