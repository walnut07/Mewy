import "../../../Style.css";
import Button from 'react-bootstrap/Button';
import { auth } from "../../../service/firebase";

interface Props {

}

const SignUp: React.FC<Props> = ({}) => {

  const handleSignUp = () => {
    const form: any = document.forms[0];
    const email = form[0].value;
    const password = form[1].value;
    auth.createUserWithEmailAndPassword(email, password);
  }


  return (
    <Button variant="primary" type="button" onClick={handleSignUp}>
      Sign Up
    </Button>
  );

};

export default SignUp;