import { useEffect, useState } from "react";
import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";

const Test = () => {
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

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <Form>
      <FormGroup as={Row} className="m-4">
        <Col sm={4}>
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
        <Col sm={4}>
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
        <Col sm={4}>
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
        <Col sm={4}>
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
      <FormGroup as={Row} className="m-4">
        <Col sm={4}>
          <FormControl
            required
            className="text-center"
            type="file"
            multiple={false}
            value={postData.selectedFile}
            placeholder="Tags"
            onChange={(e) => updateForm({ selectedFile: e.target.value })}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Test;
