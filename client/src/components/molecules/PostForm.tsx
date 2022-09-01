import Form from "react-bootstrap/Form";
import Card from "./Card";
import Photo from "./form/Photo";
import Location from "./form/Location";
import Description from "./form/Description";
import PostButton from "./buttons/Post";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

interface Props {

}

interface Location {
  postId: number;
  userId: string;
  imageUrl: string;
  description: string|undefined;
  latitude: number;
  longitude: number;
  createdAt: string;
  modifiedAt: string;
}


const PostForm: React.FC<Props>  = ({}) => {
  const location = useLocation();
  const state: Location|unknown = location.state;
  const [base64, setBase64] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<any>("");
  const [progress, setProgress] = useState<number>(100);

  const data = {
      ID: -1,
      userId: "model",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/mewy-d966b.appspot.com/o/images%2Fgolang.png?alt=media&token=c23cceb5-703f-4d60-a7fb-8d4b94b6877a",
      latitude: 12.04042,
      longitude: 15.42191,
      description: "I'm Gopher",
      createdAt: "2020-10-10",
      modifiedAt: "2020-10-10",
  }

  return (
    <Form name="post-form">
      <Card postId={data.ID} userId={data.userId} imageUrl={data.imageUrl} latitude={data.latitude} longitude={data.longitude} description={data.description} createdAt={data.createdAt} modifiedAt={data.modifiedAt} state={state} />
      <Photo setImage={setImage} setError={setError} />
      <Location />
      <Description />
      <PostButton setError={setError} image={image} setProgress={setProgress} setImageUrl={setImageUrl} imageUrl={imageUrl}/>
    </Form>
  );

};

export default PostForm;