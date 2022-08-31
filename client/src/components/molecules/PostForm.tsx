import Form from "react-bootstrap/Form";
import Card from "./Card";
import Photo from "./form/Photo";
import Location from "./form/Location";
import Description from "./form/Description";
import PostButton from "./buttons/Post";
import { useState } from "react";

const PostForm = () => {

  const [base64, setBase64] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<any>("");
  const [progress, setProgress] = useState<number>(100);

  return (
    <Form name="post-form">
      <Card />
      <Photo setImage={setImage} setError={setError} />
      <Location />
      <Description />
      <PostButton setError={setError} image={image} setProgress={setProgress} setImageUrl={setImageUrl} imageUrl={imageUrl}/>
    </Form>
  );

};

export default PostForm;