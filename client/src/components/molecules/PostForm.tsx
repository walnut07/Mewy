import Form from "react-bootstrap/Form";
import Card from "./Card";
import Photo from "./form/Photo";
import Location from "./form/Location";
import Description from "./form/Description";
import PostButton from "./buttons/Post";
import { useState } from "react";

const PostForm = () => {
  const [base64, setBase64] = useState<string>("");

  return (
    <Form name="post-form">
      <Card />
      <Photo setBase64={setBase64}/>
      <Location />
      <Description />
      <PostButton base64={base64}/>
    </Form>
  );

};

export default PostForm;