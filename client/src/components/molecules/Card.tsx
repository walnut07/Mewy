import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const PhotoCard = () => {
  return (
    <Card className="card-width card-margin bg-purple-gradient">
    <Card.Img variant="top" src={require('./test-photo.jpeg')} className="content-fit img-margin"/>
    <Card.Body>
      <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </Card.Body>
  </Card>
  );
};

export default PhotoCard;