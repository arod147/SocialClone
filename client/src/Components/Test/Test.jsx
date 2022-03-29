import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createNewPost, updatePost } from "../../app/postsThunks";
import { selectCurrentId, setCurrentId } from "../../app/postsSlice";
import FileBase from "react-file-base64";

//Form for creating and editing posts
const Test = () => {
  const dispatch = useAppDispatch();
  const currentId = useAppSelector(selectCurrentId);

  //Get post information to edit
  const post = useAppSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );

  //Form info
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const updateForm = (value) => {
    return setPostData((prev) => {
      return { ...prev, ...value };
    });
  };

  //Updates our form if we choose to edit a post
  useEffect(() => {
    // console.log(post);
    if (post) {
      updateForm(post);
    }
  }, [currentId]);

  // Reset from
  const clear = () => {
    dispatch(setCurrentId(0));
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createNewPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  //Form structure
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup as={Row} className="m-4">
        <Col sm={7}>
          <FormControl
            required
            className="text-center"
            type="text"
            value={postData.creator}
            placeholder="Creator"
            onChange={(e) => updateForm({ creator: e.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="m-4">
        <Col sm={7}>
          <FormControl
            required
            className="text-center"
            type="text"
            value={postData.title}
            placeholder="Title"
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="m-4">
        <Col sm={7}>
          <FormControl
            required
            className="text-center"
            type="text"
            value={postData.message}
            placeholder="Message"
            onChange={(e) => updateForm({ message: e.target.value })}
          />
        </Col>
      </FormGroup>
      <FormGroup as={Row} className="m-4">
        <Col sm={7}>
          <FormControl
            required
            className="text-center"
            type="text"
            value={postData.tags}
            placeholder="Tags"
            onChange={(e) => updateForm({ tags: e.target.value })}
          />
        </Col>
      </FormGroup>
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => updateForm({ selectedFile: base64 })}
        />
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={() => clear()}>Clear</Button>
    </Form>
  );
};

export default Test;
