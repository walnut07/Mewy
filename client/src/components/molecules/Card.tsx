import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

interface Props {
  userId?: string;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
  description?: string;
  createdAt?: string;
  modifiedAt?: string;
}

const PhotoCard: React.FC<Props>  = ({userId, imageUrl, latitude, longitude, description, createdAt, modifiedAt}) => {
  return (
    <Card className="card-width card-margin bg-purple-gradient">
    <Card.Img variant="top" src={imageUrl} className="content-fit img-margin"/>
    <Card.Body>
      <footer className="blockquote-footer">
            {description} 
            <cite title="Source Title">{modifiedAt}</cite>
      </footer>
    </Card.Body>
  </Card>
  );
};

export default PhotoCard;