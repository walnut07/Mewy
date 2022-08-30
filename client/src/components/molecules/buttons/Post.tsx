import "../../../Style.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"

interface Props {

}

const Post: React.FC<Props> = ({}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/post", { state: { id: 1 }})
  }

  return (
    <Button variant="primary" type="button" onClick={handleClick}>
      Post
    </Button>
  );
};

export default Post;