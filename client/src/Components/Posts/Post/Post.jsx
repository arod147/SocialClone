import { Button, Card, CardImg, Col } from "react-bootstrap";
import "../Post/Post.css";

const Post = () => {
  return (
    <Col>
      <Card>
        <CardImg
          className="cardImg"
          src="https://via.placeholder.com/150"
          alt="cool stuff"
        />
        <Card.ImgOverlay>
          <Card.Title>Alex</Card.Title>
          <Card.Text>Updated 3 min ago.</Card.Text>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Subtitle>Tags</Card.Subtitle>
          <Card.Title>New Years</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Like</Button>
          <Button>Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
