import moment from "moment";
import { Button, Card, CardImg, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useAppDispatch } from "../../../app/hooks";
import { setCurrentId } from "../../../app/postsSlice";
import { deletePost, likePost } from "../../../app/postsThunks";
import "../Post/Post.css";

//Template use for all posts
const Post = (props) => {
  const dispatch = useAppDispatch();

  return (
    <Col>
      <Card>
        <CardHeader>
          <Card.Title>{props.post.creator}</Card.Title>
          <Card.Text>{moment(props.post.createdAt).fromNow()}</Card.Text>
          <Button
            size="sm"
            variant="primary"
            onClick={() => dispatch(setCurrentId(props.post._id))}
          >
            Edit
          </Button>
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
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>{props.post.message}</Card.Text>
          <Card.Subtitle>{props.post.tags}</Card.Subtitle>
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
