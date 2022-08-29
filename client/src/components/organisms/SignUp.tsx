import Form from 'react-bootstrap/Form';
import SignUpButton from "../molecules/buttons/SignUp";
import Email from "../molecules/form/Email";
import Password from "../molecules/form/Password";

const SignUp = () => {

  return (
    <Form>
      <Email />
      <Password />
      <SignUpButton />
    </Form>
  );

};

export default SignUp;