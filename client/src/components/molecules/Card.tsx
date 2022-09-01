import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface Props {
  userId: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  description?: string;
  createdAt: string;
  modifiedAt: string;
}

const PhotoCard: React.FC<Props>  = ({userId, imageUrl, latitude, longitude, description, createdAt, modifiedAt}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photo/${description}/${createdAt}`);
  }

  return (
    <Card className="card-width card-margin bg-purple-gradient pointer" onClick={handleClick}>
    <Card.Img variant="top" src={imageUrl} className="content-fit img-margin"/>
    <Card.Body>
      <p className="text-white">{description}</p>
      <footer className="blockquote-footer text-light-pink">
        <span className="text-light-pink">{moment(modifiedAt).fromNow()}</span>
      </footer>
    </Card.Body>
  </Card>
  );
};

export default PhotoCard;