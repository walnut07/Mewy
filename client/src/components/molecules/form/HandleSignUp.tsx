import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { auth } from "../../../service/firebase";

interface Props {

}

const SignUp: React.FC<Props> = ({}) => {
  const [errorMessage, setErrorMessage] = useState<string|null>();

  const handleSignUp = async () => {
    const form: any = document.forms[0];
    const email = form[0].value;
    const password = form[1].value;
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
    } catch (err: any) {
      const errString = String(err);
      setErrorMessage("Please input a valid email address");
      if (errString.includes("email")) {
        setErrorMessage("Please input valid an email address");
      } else if (errString.includes("password")) {
        setErrorMessage("Password must be more than 6 letters");
      }
    }
  }

  return (
    <React.Fragment>
      <Button variant="primary" type="button" onClick={handleSignUp}>
        Sign Up
      </Button>
      <span>{errorMessage}</span>
  </React.Fragment>
  );

};

export default SignUp;