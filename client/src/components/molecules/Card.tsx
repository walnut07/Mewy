import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import moment from "moment";

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
  return (
    <Card className="card-width card-margin bg-purple-gradient">
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