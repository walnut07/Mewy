import Form from "react-bootstrap/Form";
import Card from "./Card";
import Photo from "./form/Photo";
import Location from "./form/Location";
import Description from "./form/Description";
import PostButton from "./buttons/Post";
// 
// Create Locataion/Description/PostButton
// 
const PostForm = () => {

  return (
    <Form>
      <Card />
      <Photo />
      <Location />
      <Description />
      <PostButton/>
    </Form>
  );

};

export default PostForm;