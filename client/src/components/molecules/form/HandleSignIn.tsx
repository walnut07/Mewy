import { auth } from "../../../service/firebase";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import React from "react";

interface Props {

}

const SignIn: React.FC<Props> = ({}) => {
  const [errorMessage, setErrorMessage] = useState<string|null>();
  
  const handleSignIn = async () => {
    const form: any = document.forms[0];
    const email = form[0].value;
    const password = form[1].value;

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
    } catch (err: any) {
      const errString = String(err);
      if (errString.includes("email")) {
        setErrorMessage("Please input a valid email address");
      } else {
        setErrorMessage("Email or password is wrong ");
      }
    }
  }


  return (
    <React.Fragment>
      <Button variant="primary" type="button" onClick={handleSignIn}>
        Sign In
      </Button>
      <span>{errorMessage}</span>
    </React.Fragment>
  );

};

export default SignIn;