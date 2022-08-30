import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Authcontext";
import SignInButton from "../molecules/buttons/SignIn";
import SignUpButton from "../molecules/buttons/SignUp";

const Form = () => {
  const { user } = useAuthContext();
  return (
    <section>
      <h1>Form is being built</h1>
      {/* TODO: Add a form to post a photo */}
      {!user && 
        <>
        <SignInButton />
        <SignUpButton />
        </>
      }
      {/* {user 
        // TODO: Create a Log out component
      } */}
    </section>
  );

};

export default Form;