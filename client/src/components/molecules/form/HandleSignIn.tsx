import { auth } from "../../../service/firebase";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface Props {

}

const SignIn: React.FC<Props> = ({}) => {

  const handleSignIn = () => {
    const form: any = document.forms[0];
    const email = form[0].value;
    const password = form[1].value;
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password);
  }


  return (
    <Button variant="primary" type="button" onClick={handleSignIn}>
      Sign In
    </Button>
  );

};

export default SignIn;