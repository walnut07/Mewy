import "../../../Style.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/list/:-1", { state: { id: 1 }})
  }

  return (
    <Button variant="primary" type="button" onClick={handleClick}>
      Explore
    </Button>
  );
};

export default Explore;