import EditButton from "../molecules/buttons/GoPost";
import SignUpButton from "../molecules/buttons/SignUp";
import SignInButton from "../molecules/buttons/SignIn";
import { useAuthContext } from '../../context/Authcontext';

interface Props {
  postId: number;
  userId: string;
  imageUrl: string;
  description?: string|undefined;
  latitude: number;
  longitude: number;
  createdAt: string;
  modifiedAt: string;
}

const EditButtons: React.FC<Props>  = ({postId, userId, imageUrl, description, latitude, longitude, createdAt, modifiedAt}) => {
  const { user } = useAuthContext();

  return (
    <div>
      {user && <EditButton postId={postId} userId={userId} imageUrl={imageUrl} description={description}latitude={latitude} longitude={longitude} createdAt={createdAt} modifiedAt={modifiedAt}/>}
      {!user && <SignUpButton />}
      {!user && <SignInButton />}
    </div>
  );
};

export default EditButtons;