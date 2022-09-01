import { useParams } from 'react-router';

interface Props {

}

const SinglePhoto: React.FC<Props> = ({}) => {
  const { id } = useParams();
  
  return (
      <>
        <h1>This is Single Photo</h1><p>Id is {id}</p>
      </>
  );
};

export default SinglePhoto;