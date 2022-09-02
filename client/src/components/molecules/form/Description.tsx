import Form from 'react-bootstrap/Form';

interface Props {
  isEdit: boolean;
}

const Description: React.FC<Props> = ({isEdit}) => {
  return (
    <>
      <Form.Label htmlFor="inputDescription">Description</Form.Label>
      <Form.Control
        type="text"
        id="inputDescription"
        aria-describedby="description of the photo"
      />
    </>
  );
}

export default Description;