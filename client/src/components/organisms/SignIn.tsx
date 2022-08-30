import Form from 'react-bootstrap/Form';
import SignInButton from "../molecules/form/HandleSignIn";
import Email from "../molecules/form/Email";
import Password from "../molecules/form/Password";

const SignIn = () => {

  return (
    <Form>
      <Email />
      <Password />
      <SignInButton />
    </Form>
  );

};

export default SignIn;