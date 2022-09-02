import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface Props {
  text?: string
  postId?: number;
  userId?: string;
  imageUrl?: string;
  description?: string|undefined;
  latitude?: number;
  longitude?: number;
  createdAt?: string;
  modifiedAt?: string;
}

const GoPost: React.FC<Props> = ({text, postId, userId, imageUrl, description, latitude, longitude, createdAt, modifiedAt}) => {

  return (
    <Link to={'/post'} state={{postId: postId, userId: userId, imageUrl: imageUrl, 
      description: description, latitude: latitude, longitude: longitude, createdAt: createdAt, modifiedAt: modifiedAt}}>
      <Button variant="primary" type="button">
        {text ? (text) : "Post"}
      </Button>
    </Link>
  );

};

export default GoPost;