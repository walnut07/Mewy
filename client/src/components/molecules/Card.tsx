import "../../Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const PhotoCard = () => {
  return (
    <Card className="card-width card-margin">
    <Card.Img variant="top" src={require('./test-photo.jpeg')} className="content-fit"/>
    <Card.Body>
      <Card.Text className="text-indigo">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default PhotoCard;