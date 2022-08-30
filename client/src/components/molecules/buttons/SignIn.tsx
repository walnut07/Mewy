import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface Props {

}

const SignIn: React.FC<Props> = ({}) => {

  return (
    <Link to={'/signup'}>
      <Button variant="primary" type="button">
        Sign In
      </Button>
    </Link>
  );

};

export default SignIn;