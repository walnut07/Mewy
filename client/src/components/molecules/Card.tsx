import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface Props {
  postId: number;
  userId: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  description?: string;
  createdAt: string;
  modifiedAt: string;
}

const PhotoCard: React.FC<Props>  = ({postId, userId, imageUrl, latitude, longitude, description, createdAt, modifiedAt}) => {

  const navigate = useNavigate();

  const handleClick = (e: any) => {
    const id = e.target.id;
    navigate(`/photo/${id}/`);
  }

  return (
    <Card className="card-width card-margin bg-purple-gradient pointer" id={String(postId)} onClick={handleClick}>
    <Card.Img variant="top" src={imageUrl} className="content-fit img-margin" id={String(postId)}/>
    <Card.Body id={String(postId)}>
      <p className="text-white">{description}</p>
      <footer className="blockquote-footer text-light-pink">
        <span className="text-light-pink">{moment(modifiedAt).fromNow()}</span>
      </footer>
    </Card.Body>
  </Card>
  );
};

export default PhotoCard;