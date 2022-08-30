import { useAuthContext } from "../../context/Authcontext";

const UserName = () => {
  const { user } = useAuthContext();

  return (
    <p>Hello, {user.email}</p>
  );

};

export default UserName;