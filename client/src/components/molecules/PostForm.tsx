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
  const card = document.getElementsByClassName("card")[0];
  const cardId = Number(card.id);
  const isEdit = true ? cardId >= 0 : false;

  const sampleData = {
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
      <Card postId={sampleData.ID} userId={sampleData.userId} imageUrl={sampleData.imageUrl} latitude={sampleData.latitude} longitude={sampleData.longitude} description={sampleData.description} createdAt={sampleData.createdAt} modifiedAt={sampleData.modifiedAt} state={state} />
      { !isEdit && <Photo setImage={setImage} setError={setError} /> }
      <Location isEdit={isEdit}/>
      <Description isEdit={isEdit}/>
      <PostButton isEdit={isEdit} setError={setError} image={image} setProgress={setProgress} setImageUrl={setImageUrl} imageUrl={imageUrl}/>
    </Form>
  );

};

export default PostForm;