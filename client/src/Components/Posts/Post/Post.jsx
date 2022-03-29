import { Button, Card, CardImg, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useAppDispatch } from "../../../app/hooks";
import { deletePost, likePost } from "../../../app/postsThunks";
import "../Post/Post.css";

const Post = (props) => {
  const dispatch = useAppDispatch();

  return (
    <Col>
      <Card>
        <CardHeader>
          <Card.Title>{props.post.creator}</Card.Title>
          <Card.Text>{props.post.createdAt}</Card.Text>
        </CardHeader>
        <CardImg
          className="cardImg"
          src={
            props.post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt="cool stuff"
        />
        <Card.Body>
          <Card.Subtitle>{props.post.tags}</Card.Subtitle>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>{props.post.message}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="primary"
            onClick={() => dispatch(likePost(props.post._id))}
          >
            {props.post.likeCount}
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(deletePost(props.post._id))}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
