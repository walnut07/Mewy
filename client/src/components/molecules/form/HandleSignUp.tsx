import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { auth } from "../../../service/firebase";
import { useAuthContext } from '../../../context/Authcontext';

interface Props {

}

const SignUp: React.FC<Props> = ({}) => {
  const [errorMessage, setErrorMessage] = useState<string|null>();
  const { user } = useAuthContext();

  const handleSignUp = async () => {
    const form: any = document.forms[0];
    const email = form[0].value;
    const password = form[1].value;
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
    } catch (err: any) {
      const errString = String(err);
      if (errString.includes("already in use")) {
        setErrorMessage("This email is already in use")
      } else if (errString.includes("email")) {
        setErrorMessage("Please input an valid email address");
      } else if (errString.includes("password")) {
        setErrorMessage("Password must be more than 6 letters");
      } 
      console.log(err);
      return;
    } 
  }

  if (user) {
    return <Link to="/post" />;
  } else {
    return (
      <React.Fragment>
        <Button variant="primary" type="button" onClick={handleSignUp}>
          Sign Up
        </Button>
        <span>{errorMessage}</span>
    </React.Fragment>
    );
  }

};

export default SignUp;