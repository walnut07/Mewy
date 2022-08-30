import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface Props {

}

const SignUp: React.FC<Props> = ({}) => {

  return (
    <Link to={'/signup'}>
      <Button variant="primary" type="button">
        Sign Up
      </Button>
    </Link>
  );

};

export default SignUp;