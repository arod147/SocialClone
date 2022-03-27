import { Container, Row } from "react-bootstrap";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <Container className="justify-content-center">
      <Row xs={1} sm={1} lg={2} className="g-4">
        <Post />
        <Post />
        <Post />
      </Row>
    </Container>
  );
};

export default Posts;
