import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Test from "../Test/Test";

//Used to structure our page before passing it to our App
const Homepage = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row lg={2} xs={1}>
        <Col>
          <Posts />
        </Col>
        <Col>
          <Test />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Homepage;
