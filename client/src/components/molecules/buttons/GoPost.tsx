import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface Props {

}

const GoPost: React.FC<Props> = ({}) => {

  return (
    <Link to={'/post'}>
      <Button variant="primary" type="button">
        Post
      </Button>
    </Link>
  );

};

export default GoPost;