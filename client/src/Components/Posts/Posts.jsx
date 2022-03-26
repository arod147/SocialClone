import { Container, Row } from "react-bootstrap";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <Container className="justify-content-center">
      <Row xs={1} md={2}>
        <Post />
        <Post />
      </Row>
    </Container>
  );
};

export default Posts;
