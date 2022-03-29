import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { selectPosts } from "../../app/postsSlice";
import Post from "./Post/Post";

//Display all our post in a neat grid depending on screen size

const Posts = () => {
  const myPosts = useAppSelector(selectPosts);
  //Creates a list using our post templates for each post.
  const list = () => {
    return myPosts.map((post, i) => {
      return <Post key={i} post={post} />;
    });
  };

  return (
    <Container className="justify-content-center">
      <Row xs={1} sm={1} lg={2} className="g-4">
        {list()}
      </Row>
    </Container>
  );
};

export default Posts;
