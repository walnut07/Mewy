import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Authcontext";
import SignInButton from "../molecules/buttons/SignIn";
import SignUpButton from "../molecules/buttons/SignUp";
import PostForm from "../molecules/PostForm";
import UserName from "../molecules/UserName";

const Form = () => {
  const { user } = useAuthContext();
  return (
    <section>
      {user && <UserName />}
      <PostForm />
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